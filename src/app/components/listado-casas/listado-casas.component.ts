import { Component, OnInit } from '@angular/core';
import { Casa } from 'src/app/models/casa';
import { CasaService } from 'src/app/providers/casa.service';

const CASAS_TODAS = 0;
const CASAS_ALQUILADAS = 1;
const CASAS_EN_VENTA = 2;

@Component({
  selector: 'app-listado-casas',
  templateUrl: './listado-casas.component.html',
  styleUrls: ['./listado-casas.component.scss']
})
export class ListadoCasasComponent implements OnInit {
  casas: Casa[];
  casa: Casa;

  // Variables para pipes
  todas: number;
  numMin: number;
  numMax: number;

  constructor( public casaService: CasaService) {
    console.trace('ListadoCasasComponent constructor');
    this.casas = [];
    this.casa = new Casa();
    this.todas = 0;
    this.numMin = 0;
    this.numMax = 0;
  }

  ngOnInit() {
    console.trace('ListadoCasasComponent ngOnInit');
    this.casaService.getAll().subscribe(data => {
      console.debug('Datos recibidos $%o', data);
      this.casas = data.map(el => el);
      this.casa = this.casas[0];
    });
  }

  mostrar(c: Casa) {
    console.trace('Mostrar ListadoCasasComponent');
    this.casa = c;
  }

  filtrar(filtro: number) {
    console.trace('ListadoCasasComponent filtrar ' + this.todas);
    console.log('Min: ' + this.numMin + ' Max: ' + this.numMax);
    if (filtro === CASAS_TODAS) {
      this.todas = 0;
    } else if (filtro === CASAS_ALQUILADAS) {
      this.todas = 1;
    } else if (filtro === CASAS_EN_VENTA) {
      this.todas = 2;
    }
  }
}
