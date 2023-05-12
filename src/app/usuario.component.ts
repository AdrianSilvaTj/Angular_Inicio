import { Component} from '@angular/core';

@Component({
  selector:'app-usuario',
  templateUrl: './usuario.component.html'

})

export class UsuarioComponent {
  usuarios = ['Luis', 'Fernando', 'Marino', 'Adrian'];
  usuarioNombre = '';
  visible = false;

  constructor() {
    // Despues de 3 seg visible sera True
    setTimeout(() => {
    this.visible = true;
    },3000);
  }

  onAgregarUsuario(){
    this.usuarios.push(this.usuarioNombre);
  }

}
