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


@Component({
  selector: 'app-favoritos',
  standalone:true,
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
   
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {

  @ViewChild('alertRef') alertComponent!: AlertComponent;

  artists: any[] = [];
  selectedArtist: any = null;

  constructor(
    private  apimidservice: ApiMidService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadFavoritos();
  }

loadFavoritos(): void {
  this.apimidservice.getData('Favoritos?limit=0').subscribe(
    (res: any) => {
      console.log('Respuesta Favoritos:', res);  // <--- Aquí
      if (res && res.Data) {
        this.artists = res.Data;
      } else {
        this.artists = [];
        this.alertComponent.show('No hay favoritos disponibles');
      }
    },
    (error) => {
      console.error('Error en favoritos:', error);  // <--- Y aquí
      this.alertComponent.show('Error al cargar favoritos');
    }
  );
}

  selectArtist(artist: any): void {
    this.selectedArtist = artist;
  }

  toggleFavorite(artist: any): void {
    // Si quieres manejar favorito de artista, aquí debes implementar lógica y llamar al backend.
    artist.favorito = !artist.favorito;

    // Ejemplo de POST, pero esto depende de tu API:
    this.apimidservice.postData('favoritos/artistas', {
      artistaId: artist.id,
      favorito: artist.favorito
    }).subscribe(
      () => {},
      () => {
        this.alertComponent.show('Error al actualizar favorito del artista');
        artist.favorito = !artist.favorito; // revertir
      }
    );
  }

  toggleSongFavorite(song: any): void {
    song.favorita = !song.favorita;

    // En tu backend deberás implementar el endpoint que acepte esta petición
    this.apimidservice.postData('favoritos/canciones', {
      cancionId: song.id,
      favorita: song.favorita
    }).subscribe(
      () => {},
      () => {
        this.alertComponent.show('Error al actualizar favorito de la canción');
        song.favorita = !song.favorita;
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