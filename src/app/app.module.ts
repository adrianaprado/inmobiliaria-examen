// Modulos Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { ListadoCasasComponent } from './components/listado-casas/listado-casas.component';
import { DetalleCasaComponent } from './components/detalle-casa/detalle-casa.component';
import { LoginComponent } from './components/login/login.component';
import { FormularioComponent } from './components/formulario/formulario.component';

// Pipes
import { PrecioPipe } from './pipes/precio.pipe';
import { AlquilerPipe } from './pipes/alquiler.pipe';

// Providers
import { LoginService } from './providers/login.service';
import { CasaService } from './providers/casa.service';

// Guards
import { PrivadoGuard } from './guards/privado.guard';

@NgModule({
  declarations: [
    AppComponent,
    ListadoCasasComponent,
    DetalleCasaComponent,
    LoginComponent,
    FormularioComponent,
    PrecioPipe,
    AlquilerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ngmodel banana in a box
    HttpClientModule, // Peticiones http asincronas
    ReactiveFormsModule
  ],
  providers: [
    LoginService,
    CasaService,
    PrivadoGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
