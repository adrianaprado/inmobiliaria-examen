import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, Validators, FormControl } from '@angular/forms';
import { CasaService } from 'src/app/providers/casa.service';
import { ActivatedRoute } from '@angular/router';
import { Casa } from 'src/app/models/casa';
import { Servicio } from 'src/app/models/servicio';

const ALERTA_SUCCESS = 'success';
const ALERTA_WARNING = 'warning';
const ALERTA_INFO = 'info';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  formulario: FormGroup;
  servicios: FormArray;
  urlPattern: string;

  // Referente a mensajes al usuario
  mensaje: string;
  tipoAlerta: string;

  constructor(private route: ActivatedRoute,  public casaService: CasaService) {
    console.trace('constructor FormularioComponent');
    this.mensaje = '';
    this.tipoAlerta = ALERTA_INFO;
    this.urlPattern = '^(http(s?)):\/\/.+\.(jpg|png|jpeg)$';

    this.formulario = new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]),
      precio: new FormControl(
        0, // Con valor inicial
        [ // Validaciones
          Validators.required,
          Validators.min(0.1),
          Validators.max(9999999999999)
        ]),
      alquiler: new FormControl(
        false,
          [
            Validators.required
          ]),
      habitaciones: new FormControl(
        0,
          [
            Validators.required,
            Validators.min(1),
            Validators.max(99)
          ]),
      foto: new FormControl(
        '',
        [
          Validators.required,
          Validators.pattern(this.urlPattern)
        ]),
        direccion: new FormControl(
          '',
          [
            Validators.required,
            Validators.min(1),
            Validators.max(150)
          ]),
      servicios: new FormArray([this.crearServicioFormGroup()],
        Validators.minLength(1))
    });

    console.trace('Formulario %o', this.formulario);
  }

  ngOnInit() {
    console.trace('ngOnInit FormularioComponent');
  }

  crearServicioFormGroup(): FormGroup {
    console.trace('FormularioComponent crearServicioFormGroup');
    return new FormGroup({
      nombre: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(15)
        ]),
        disponible: new FormControl(
        false,
          [
            Validators.required
          ]),
    });
  }

  nuevoServicio() {
    console.trace('enviarFruta nuevoServicio');
    const arrayServicios = this.formulario.get('servicios') as FormArray;
    arrayServicios.push(this.crearServicioFormGroup());
  }

  enviar() {
    console.trace('enviarFruta enviar');
    const casa = new Casa();
    casa.nombre =  this.formulario.controls.nombre.value;
    casa.precio = this.formulario.controls.precio.value;
    casa.alquiler = this.formulario.controls.alquiler.value;
    casa.habitaciones = this.formulario.controls.habitaciones.value;
    casa.foto = this.formulario.controls.foto.value;
    casa.direccion = this.formulario.controls.direccion.value;

    const arrayServicios = this.formulario.get('servicios') as FormArray;

    arrayServicios.controls.forEach(service => {
      const servicioFormControl = service.value;
      const servicio = new Servicio();
      servicio.nombre = servicioFormControl.nombre;
      servicio.disponible = servicioFormControl.disponible;
      casa.servicios.push(servicio);
      console.trace('servicioFormControl', service);
    });

    this.casaService.add(casa).subscribe(data => {
        console.debug('data %o ', data);
        this.mensaje = 'Casa creada correctamente';
        this.tipoAlerta = ALERTA_SUCCESS;
      }, error => {
        console.warn('Error' + error);
        this.mensaje = 'No se ha podido crear la fruta';
        this.tipoAlerta = ALERTA_WARNING;
    });
  }

  eliminarServicio( index: number) {
    const arrayServicios = this.formulario.get('servicios') as FormArray;
    if ( arrayServicios.length > 1 ) {
      arrayServicios.removeAt(index);
    }
  }

  vaciarCampos() {
    this.formulario.controls.nombre.setValue('');
    this.formulario.controls.precio.setValue(0);
    this.formulario.controls.alquiler.setValue(false);
    this.formulario.controls.habitaciones.setValue(0);
    this.formulario.controls.foto.setValue('');
    this.formulario.controls.servicios.setValue([{nombre:  '', disponible: false}]);
  }
}
