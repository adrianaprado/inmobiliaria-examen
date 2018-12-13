import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

const USUARIO_NOMBRE = 'admin';
const USUARIO_PASSWORD = 'admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  usuario: Usuario;

  constructor() {
    console.log('constructor LoginService');
    this.usuario = undefined;
  }

  isLogged(): boolean {
    console.log('LoginService isLogged');
    if (this.usuario) {
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    console.log('LoginService logout');
    this.usuario = undefined;
  }

  login(u: Usuario): boolean {
    console.log('LoginService login %o', u);
    if (u && u.nombre === USUARIO_NOMBRE && u.password === USUARIO_PASSWORD) {
      this.usuario = u;
      console.log('Usuario loggeado');
      return true;
    } else {
      this.usuario = undefined;
      console.warn('Usuario no es correcto');
      return false;
    }
  }
}
