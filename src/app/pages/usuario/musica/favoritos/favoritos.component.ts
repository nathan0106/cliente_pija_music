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
import { Router } from '@angular/router';
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
    AlertComponent
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
 
  constructor(public dialog: MatDialog, private apimidservice: ApiMidService) {}
  @ViewChild('alertRef') alertComponent!: AlertComponent;
  artists : any[]=[];

  selectedArtist: any = null; // Artista seleccionado

  // Método para seleccionar un artista
  selectArtist(artist: any) {
    this.selectedArtist = artist;
  }

  // Método para abrir el video en YouTube embebido
  openVideo(videoUrl: string) {
      this.dialog.open(VideoDialogComponent,{
        data: {url: videoUrl },
        width: '600px'
      })
  }
  toggleFavorite(artist: any): void {
  artist.favorito = !artist.favorito;
}
  
  ngOnInit(): void {

        this.apimidservice.getData('canciones').subscribe(
      (respuesta) => {
        this.artists = respuesta['Data'];
      },
      (error) => {
        this.alertComponent.show('Error al consultar Canciones');
      }
    );

  }

}
