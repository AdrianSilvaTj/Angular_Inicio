import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioComponent } from './usuario.component';
import { InicioComponent } from './inicio.component';
import { LibrosComponent } from './libros/libros.component';
import { LibroComponent } from './libro/libro.component';
import { LibrosService } from './services/libros.service';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [LibrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
