// Comparte data y metodos en cualquier compenente
import { Subject } from "rxjs";
//import { Subscription } from 'rxjs';

export class LibrosService {
  // ejecuta una acción cuando un cambia
  librosSubject = new Subject();

  private libros = [
    'Libro de Vaxi',
    'Libro de Aritmetica',
    'El Gráfico Revista',
  ];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(this.libros);
  }

  eliminarLibro(libroNombre: string) {
    //console.log(libroNombre);
    this.libros = this.libros.filter((p) => p !== libroNombre);
    this.librosSubject.next(this.libros);
    //console.log(this.libros);
  }

  obtenerLibros() {
    // [...this.libros] devuelvo tanto los elementos actuales de la lista como los que se agreguen despues
    return [...this.libros];
  }
}
