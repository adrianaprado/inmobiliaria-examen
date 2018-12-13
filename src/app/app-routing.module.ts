import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCasasComponent } from './components/listado-casas/listado-casas.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PrivadoGuard } from './guards/privado.guard';

const routes: Routes = [
  {path: 'home', component: ListadoCasasComponent},
  {path: 'listado-casas', component: ListadoCasasComponent},
  {path: 'login', component: LoginComponent},
  {path: 'privado', component: FormularioComponent, canActivate: [PrivadoGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
