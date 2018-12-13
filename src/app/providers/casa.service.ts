import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Casa } from '../models/casa';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  endpoint = 'http://localhost:3000/casas';

  constructor(public http: HttpClient) {
    console.log('constructor CasaService');
  }

  getAll(): Observable<any> {
    console.log(`CasaService getAll ${this.endpoint}`);
    return this.http.get(this.endpoint);
  }

  add(casa: Casa): Observable<any> {
    console.log('add CasaService: %o', casa);
    const body = {
      'nombre': casa.nombre,
      'precio': casa.precio,
      'alquiler': casa.alquiler,
      'habitaciones': casa.habitaciones,
      'foto': casa.foto,
      'direccion': casa.direccion,
      'servicios': casa.servicios
    };
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(this.endpoint, body, httpOptions);
  }
}
