import { Component } from '@angular/core';
import { LoginService } from './providers/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Inmobiliaria';

  constructor(private loginService: LoginService, private router: Router) {
    console.trace('AppComponent constructor');
  }

  logout() {
    console.trace('AppComponent logout');
    this.loginService.logout();
    this.router.navigate(['login']);
  }

  logueado() {
    console.trace('AppComponent logueado');
    if (!this.loginService.isLogged()) {
      return false;
    }
    return true;
  }
}
