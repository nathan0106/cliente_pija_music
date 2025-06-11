import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router'; 
import { Component, Input } from '@angular/core';
import { VideoDialogComponent } from '../video-dialog/video-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiMidService } from '../../../../services/api_mid.services';
import { AlertComponent } from '../../../administrador/alert/alert.component';
import { ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 



@Component({
  selector: 'app-playlist.component',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    AlertComponent,
    HttpClientModule,
   
  ],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  @ViewChild('alertRef') alertComponent!: AlertComponent;
  artists: any[] = [];

  selectedArtist: any = null; // Artista seleccionado

  constructor(
    public dialog: MatDialog,
    private apimidservice: ApiMidService
  ) {}

  ngOnInit(): void {
    // Obtener las canciones desde el backend (reemplaza con tu API real)
    this.apimidservice.getData('canciones').subscribe(
      (respuesta: any) => {
        this.artists = respuesta['Data'];
      },
      (error: any) => {
        this.alertComponent.show('Error al consultar canciones');
      }
    );
    
  }

  // Método para seleccionar un artista
  selectArtist(artist: any): void {
    this.selectedArtist = artist;
  }

  // Abrir el video en un diálogo
  openVideo(videoUrl: string): void {
    this.dialog.open(VideoDialogComponent, {
      data: { url: videoUrl },
      width: '600px',
    });
  }
  

  // Función para manejar el cambio de favorito de un artista
  toggleFavorite(artist: any): void {
    artist.favorito = !artist.favorito;
    // Aquí puedes agregar un POST para guardar la preferencia de favorito del artista
  }

  // Función para manejar el cambio de favorito de una canción
 toggleSongFavorite(song: any): void {
  song.favorita = !song.favorita;

  const songId = song.IdCanciones || song. IdUsuario || song.Id;


  if (!songId) {
    console.error('❌ La canción no tiene un ID válido:', song);
    this.alertComponent.show('Error: La canción no tiene un ID válido.');
    return;
  }

  const favorito = {
    IdUsuario:songId, // ID del usuario (estático por ahora)
    IdCanciones:songId,
    FechaAgregado: new Date().toISOString()
  };

  const favoritoJson = JSON.stringify(favorito);
  console.log('📤 Enviando favorito:', favoritoJson);

  this.apimidservice.postData('Favoritos', favoritoJson).subscribe(
    (response: any) => {
      console.log('✅ Canción guardada como favorita:', response);
      // Puedes actualizar la UI o recargar favoritos si deseas
    },
    (error: any) => {
      console.error('❌ Error al guardar la canción como favorita', error);
      this.alertComponent.show('Hubo un error al guardar la canción como favorita.');
    }
  );
}


  
}

import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogplaylist',
  standalone: true,
  imports: [
     MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './dialogplaylist.html',
  styleUrls: ['./dialogplaylist.css']
})
export class DialogPlaylist {
  constructor(
    private dialogRef: MatDialogRef<DialogPlaylist>,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}