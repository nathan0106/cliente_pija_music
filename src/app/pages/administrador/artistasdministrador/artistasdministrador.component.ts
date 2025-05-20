import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-artistasdministrador',
   standalone: true,
  imports: [
    CommonModule,
     FormsModule ,
  ],
  templateUrl: './artistasdministrador.component.html',
  styleUrl: './artistasdministrador.component.css'
})
export class ArtistasdministradorComponent {
  artistas: any[] = [];

  artistaNuevo = {
    nombre: '',
    nombreReal: '',
    biografia: '',
    instagram: '',
    facebook: '',
    youtube: '',
    foto: null
  };

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.artistaNuevo.foto = file;
    }
  }

  guardarArtista() {
    this.artistas.push({ ...this.artistaNuevo });
    this.artistaNuevo = {
      nombre: '',
      nombreReal: '',
      biografia: '',
      instagram: '',
      facebook: '',
      youtube: '',
      foto: null
    };
  }
}
