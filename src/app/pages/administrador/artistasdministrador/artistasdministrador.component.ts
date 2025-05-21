import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

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
   constructor(private apiService: ApiService) {}
  
   artistas: any[] = [];

  artistaNuevo = {
    NombreArtistico: '',
    NombreReal: '',
    Biografia: '',
    instagram: '',
    facebook: '',
    youtube: '',
    ImagenVideo: '',
    
  };

  artistaJson_post={
    NombreArtistico: '',
    NombreReal: '',
    Biografia: '',
    ImagenVideo: '',
    RedesSociales: ''

  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.artistaNuevo.ImagenVideo = file;
    }
  }

  guardarArtista() {
    this.artistas.push({ ...this.artistaNuevo });
    this.artistaNuevo = {
      NombreArtistico: '',
      NombreReal: '',
      Biografia: '',
      instagram: '',
      facebook: '',
      youtube: '',
      ImagenVideo: ''
    };

    this.artistaJson_post={
    NombreArtistico: this.artistas[0].NombreArtistico,
    NombreReal: this.artistas[0].NombreReal,
    Biografia: this.artistas[0].Biografia,
    ImagenVideo: this.artistas[0].ImagenVideo,
    RedesSociales: '\"{\"Facebook\":\"' + this.artistas[0].facebook + '\",\"Instagram\":\"'+ this.artistas[0].instagram +'\",\"Youtube\":\"'+ this.artistas[0].youtube +'\"}"',
    }
    
    
    let artistaJson = JSON.stringify(this.artistaJson_post);

    console.log("este es el final", artistaJson)
    
    this.apiService.postData('Artista',artistaJson).subscribe(
      (respuesta) => {
        console.log('Post creado', respuesta);
        alert("Artista creado")
    
      },
      (error) => {
        console.error('Error al crear el post', error);
        alert("Error al crear un artista")
      }
    );
  }
  
  }

