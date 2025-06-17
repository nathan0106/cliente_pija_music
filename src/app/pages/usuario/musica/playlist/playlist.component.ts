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
import { ApiService } from '../../../../services/api.service';



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
  selectedArtist: any = null;

  constructor(
    public dialog: MatDialog,
    private apimidservice: ApiMidService,
    private apiservise: ApiService,
  ) {}

  
  ngOnInit(): void {
    this.apimidservice.getData('canciones').subscribe(
      (respuesta: any) => {
        this.artists = respuesta['Data'];
      },
      (error: any) => {
        this.alertComponent.show('Error al consultar canciones');
      }
    );
  }

  selectArtist(artist: any): void {
    this.selectedArtist = artist;
  }

  toggleFavorite(artist: any): void {
    artist.favorito = !artist.favorito;
  }

  toggleSongFavorite(song: any): void {
    song.favorita = !song.favorita;
    const songId = song.Id || song.IdCanciones;

    if (!songId) {
      this.alertComponent.show('Error: La canción no tiene un ID válido.');
      return;
    }

    const favorito = {
      IdUsuario: { Id: 36 }, // reemplaza con ID real si es dinámico
      IdCanciones: { Id: songId },
      FechaAgregado: new Date().toISOString()
    };

    this.apiservise.postData('Favoritos', JSON.stringify(favorito)).subscribe(
      (response: any) => {
        console.log('✅ Canción guardada como favorita:', response);
      },
      (error: any) => {
        this.alertComponent.show('Hubo un error al guardar la canción como favorita.');
      }
    );
  }

  openVideo(videoUrl: string): void {
    this.dialog.open(VideoDialogComponent, {
      data: { url: videoUrl },
      width: '600px',
    });
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