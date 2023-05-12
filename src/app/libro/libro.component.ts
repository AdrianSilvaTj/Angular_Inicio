import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';

import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css'],
})
export class LibroComponent{
  // tituloLibro, recibira la data de arreglo de libros
  @Input() tituloLibro!: string;
  @Output() libroClicked = new EventEmitter();

  constructor(private librosService: LibrosService) {}

  onClicked() {
    //le indicara al padre "Libros" de un click
    //this.libroClicked.emit();
    this.librosService.eliminarLibro(this.tituloLibro);
  }

}
