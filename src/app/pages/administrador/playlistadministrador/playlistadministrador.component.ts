import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-playlistadministrador',
  imports: [
    CommonModule,
    MatIconModule,
    RouterModule,
     FormsModule 
  ],
  templateUrl: './playlistadministrador.component.html',
  styleUrl: './playlistadministrador.component.css'
})
export class PlaylistadministradorComponent {
  cantantes = ['Yaguazo', 'Walter Silva', 'Reinal Armas','Milena Benitez','Luis Silva','El Cholo','Jorge Albarracín','Jorge Guerrero','Jhon onofre',]; 

  playlists: any[] = [];

  playlistNueva = {
    nombre: '',
    descripcion: '',
    cantante: '',
    canciones: [
      { titulo: '', duracion: '', link: '' }
    ]
  };

  agregarCancion() {
    this.playlistNueva.canciones.push({ titulo: '', duracion: '', link: '' });
  }

  eliminarCancion(index: number) {
    this.playlistNueva.canciones.splice(index, 1);
  }

  guardarPlaylist() {
    this.playlists.push({ ...this.playlistNueva });
    this.playlistNueva = {
      nombre: '',
      descripcion: '',
      cantante: '',
      canciones: [{ titulo: '', duracion: '', link: '' }]
    };
  }
}
