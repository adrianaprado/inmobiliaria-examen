import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from 'src/app/providers/login.service';
import { Router } from '@angular/router';

const ALERTA_WARNING = 'warning';
const ALERTA_INFO = 'info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup;
  mensaje: string;
  tipoAlerta: string;

  constructor(private loginService: LoginService, private router: Router) {
    console.trace('LoginComponent constructor');
    this.crearFormulario();
    this.mensaje = '';
    this.tipoAlerta = ALERTA_INFO;
  }

  ngOnInit() {
    console.trace('LoginComponent ngOnInit');
  }

  private crearFormulario() {
    this.formulario = new FormGroup({
      nombre: new FormControl(
        'admin',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ]),
      password: new FormControl(
        'admin',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25)
        ])
    });
  }

  enviar() {
    console.trace('Enviar LoginComponent');
    const nombre = this.formulario.controls.nombre.value;
    const password = this.formulario.controls.password.value;

    console.debug(`nombre = ${nombre}, password = ${password}`);

    const u = new Usuario();
    u.nombre = nombre;
    u.password = password;

    // Llamar al servicio
    if (this.loginService.login(u)) {
      this.router.navigate(['privado']);
    } else {
      this.mensaje = 'Credenciales no válidas. Por favor, inténtalo de nuevo';
      this.tipoAlerta = ALERTA_WARNING;
    }
  }
}
