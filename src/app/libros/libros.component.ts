import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
})
export class LibrosComponent implements OnInit, OnDestroy {
  // al declarar el service en app.module.ts, automatica se instancia el objeto librosService.
  libros: string[] = [];

  constructor(private librosService: LibrosService) {}
  private libroSubscription: Subscription = new Subscription;

  eliminarLibro(lib: string) {
    // eliminara el elemento seleccionado de la lista
    //this.libros = this.libros.filter((p) => p !== lib);
  }

  guardarLibro(f: any) {
    if (f.valid) {
      //this.libros.push(f.value.nombreLibro);
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }
  ngOnInit() {
    // este metodo se ejecuta luego del constructor
    this.libros = this.librosService.obtenerLibros();
    this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
      this.libros = this.librosService.obtenerLibros();
    });
  }
  ngOnDestroy() {
    // si se llega a destruir este componente debe eliminarse la subcripcion al Subjet
    this.libroSubscription.unsubscribe();
    //this.librosService.librosSubject.unsubscribe();
  }
}
