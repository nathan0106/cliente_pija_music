import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-favoritosadministrador',
   standalone: true,
  imports: [
     CommonModule,
      FormsModule
  ],
  templateUrl: './favoritosadministrador.component.html',
  styleUrl: './favoritosadministrador.component.css'
})
export class FavoritosadministradorComponent {
  artistas: any[] = [];

  artistaNuevo = {
    nombre: '',
    foto: '',
    canciones: [
      { titulo: '', duracion: '', link: '' }
    ]
  };

  agregarCancion() {
    this.artistaNuevo.canciones.push({ titulo: '', duracion: '', link: '' });
  }

  eliminarCancion(index: number) {
    this.artistaNuevo.canciones.splice(index, 1);
  }

  guardarArtista() {
    this.artistas.push({ ...this.artistaNuevo });
    this.artistaNuevo = {
      nombre: '',
      foto: '',
      canciones: [{ titulo: '', duracion: '', link: '' }]
    };
  }
}
