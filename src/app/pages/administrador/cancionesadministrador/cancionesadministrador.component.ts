import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cancionesadministrador',
   standalone: true,
  imports: [
    FormsModule,
    CommonModule  
  ],
  templateUrl: './cancionesadministrador.component.html',
  styleUrl: './cancionesadministrador.component.css'
})
export class CancionesadministradorComponent {
  artistas = ['Jorge Albarracín', 'Jorge Guerrero', 'Cristina Maica']; // Puedes cargar dinámicamente

  canciones: any[] = [];

  cancionNueva = {
    titulo: '',
    duracion: '',
    link: '',
    artista: '',
    album: '',
    idEstilo: '',
    fechaLanzamiento: ''
  };

  guardarCancion() {
    this.canciones.push({ ...this.cancionNueva });
    this.cancionNueva = {
      titulo: '',
      duracion: '',
      link: '',
      artista: '',
      album: '',
      idEstilo: '',
      fechaLanzamiento: ''
    };
  }
}
