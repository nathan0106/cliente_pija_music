import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-artistasdministrador',
   standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  MatFormFieldModule, 
  MatInputModule, 
  FormsModule, 
  MatButtonModule,
  MatDialogModule
  
  ],
  templateUrl: './artistasdministrador.component.html',
  styleUrl: './artistasdministrador.component.css'
})
export class ArtistasdministradorComponent {
   constructor(private apiService: ApiService, private dialog: MatDialog) {}

  
   artistas: any = [];

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


    this.artistaJson_post={
    NombreArtistico: this.artistaNuevo.NombreArtistico,
    NombreReal: this.artistaNuevo.NombreReal,
    Biografia: this.artistaNuevo.Biografia,
    ImagenVideo: this.artistaNuevo.ImagenVideo,
    RedesSociales: '\"{\"Facebook\":\"' + this.artistaNuevo.facebook + '\",\"Instagram\":\"'+ this.artistaNuevo.instagram +'\",\"Youtube\":\"'+ this.artistaNuevo.youtube +'\"}"',
    }
    
    this.artistaNuevo = {
    NombreArtistico: '',
    NombreReal: '',
    Biografia: '',
    instagram: '',
    facebook: '',
    youtube: '',
    ImagenVideo: ''
    };
    
    let artistaJson = JSON.stringify(this.artistaJson_post);

    console.log("este es el final", artistaJson)
    
    this.apiService.postData('Artista',artistaJson).subscribe(
      (respuesta) => {
        console.log('Post creado', respuesta);
        this.dialog.open(DialogArtistaComponent);
    
      },
      (error) => {
        console.error('Error al crear el post', error);
        alert("Error al crear un artista")
      }
    );
  }
  }


  

import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogartistas',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './dialogartistasad.html',
  styleUrls: ['./dialogartistasad.css'],
})
export class DialogArtistaComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogArtistaComponent>,
    private router: Router
  ) {}

onNoClick(): void {
  this.dialogRef.close();
}

}


