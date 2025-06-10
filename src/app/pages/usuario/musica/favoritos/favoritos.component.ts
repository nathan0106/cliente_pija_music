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
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../../administrador/alert/alert.component';
import { ViewChild } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';



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
    HttpClientModule,
    MatDialogModule

   
  ],
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']

})
export class FavoritosComponent {
  @ViewChild('alertRef') alertComponent!: AlertComponent;

  artists: any[] = [];
  selectedArtist: any = null;
  favoritos: any[] = [];

  favoritoNuevo = {
    IdUsuario: '', 
    IdCancion: '',
    FechaAgregado: '',
  };

  constructor(
    private apiService: ApiService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarArtistas();
    this.cargarFavoritos();
  }

  cargarArtistas(): void {
    this.apiService.getData('Artista?limit=0').subscribe(
      (res: any) => {
        this.artists = res?.Data || [];
        console.log('✅ Artistas cargados:', this.artists);
      },
      (error) => {
        console.error('❌ Error al cargar artistas', error);
        this.alertComponent.show('Error al cargar artistas.');
      }
    );
  }

  cargarFavoritos(): void {
    this.apiService.getData('Favoritos').subscribe(
      (res: any) => {
        this.favoritos = res?.Data || [];
        console.log('📥 Favoritos cargados:', this.favoritos);
      },
      (error) => {
        console.error('❌ Error al cargar favoritos', error);
        this.alertComponent.show('Error al cargar favoritos.');
      }
    );
  }
selectArtist(artist: any): void {
  this.selectedArtist = artist;
  // Marcar canciones favoritas
  if (this.favoritos.length > 0 && artist.canciones) {
    artist.canciones.forEach((song: any) => {
      song.favorita = this.favoritos.some((fav: any) => fav.IdCancion === song.IdCancion);
    });
  }
  console.log("🎵 Artista seleccionado:", artist);
}
  toggleSongFavorite(song: any): void {
    console.log("sdjbcsjdbjsbdvukbsdvbsdjkbvjkdsbvc")
  song.favorita = !song.favorita;

  // Asumamos que el id correcto es 'IdCancion' (ajusta si es otro)
  const songId = song.IdCancion || song.id || song.Id;

  if (!songId) {
    console.error('❌ La canción no tiene un ID válido:', song);
    return;
  }

  const favorito = {
    IdUsuario: 1,  // Usuario registrado, ID fijo por ahora
    IdCancion: songId,
    FechaAgregado: new Date().toISOString()
  };

  console.log('📤 Enviando favorito:', favorito);

  this.apiService.postData('Favoritos', JSON.stringify(favorito)).subscribe(
    (response) => {
      console.log('✅ Favorito guardado:', response);
      this.cargarFavoritos();
      this.dialog.open(DialogFavoritosComponent);
    },
    (error) => {
      console.error('❌ Error al guardar favorito:', error);
      this.alertComponent.show('Error al guardar la canción como favorita.');
    }
  );
}


}


import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogfavoritos',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  templateUrl: './dialogfavoritos.html',
  styleUrls: ['./dialogfavoritos.css'],
})
export class DialogFavoritosComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogFavoritosComponent>,
    private router: Router
  ) {}

onNoClick(): void {
  this.dialogRef.close();
}

}