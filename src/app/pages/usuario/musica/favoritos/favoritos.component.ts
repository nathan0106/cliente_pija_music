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
  favoritos: any = [];

  favoritoNuevo = {
    IdUsuario: '',
    IdCancion: '',
    FechaAgregado: ''
  

  };

  constructor(private apiService: ApiService, private dialog: MatDialog, private http: HttpClient ) {}

  ngOnInit(): void {
    this.apiService.getData('Artista?limit=0').subscribe(
      (res: any) => {
        if (res && res.Data) {
          this.artists = res.Data;
          console.log("Artistas cargados:", this.artists);
        } else {
          this.alertComponent.show("No se encontraron artistas.");
        }
      },
      (error) => {
        console.error("Error al cargar artistas", error);
        this.alertComponent.show("Error al cargar artistas.");
      }
    );
  }

  selectArtist(artist: any): void {
    this.selectedArtist = artist;
    console.log("Artista seleccionado:", artist);
  }

  guardarFavorito() {
  if (
    !this.favoritoNuevo.IdUsuario.trim() ||
    !this.favoritoNuevo.IdCancion.trim()
  ) {
    this.alertComponent.show("Por favor completa todos los campos.");
    return;
  }

  // Establecer la fecha actual automáticamente
  this.favoritoNuevo.FechaAgregado = new Date().toISOString();

  this.favoritos.push({ ...this.favoritoNuevo });

  const favoritoJson = JSON.stringify(this.favoritoNuevo);

  // Reiniciar campos
  this.favoritoNuevo = {
    IdUsuario: '',
    IdCancion: '',
    FechaAgregado: ''
  };

  this.apiService.postData('Favoritos', favoritoJson).subscribe(
    (respuesta) => {
      console.log('Favorito creado correctamente:', respuesta);
      this.dialog.open(DialogFavoritosComponent);
    },
    (error) => {
      console.error('Error al crear el favorito', error);
      this.alertComponent.show("Error al crear el favorito");
    }
  );
}

  toggleFavorite(artist: any): void {
    artist.favorito = !artist.favorito;
    // Aquí podrías enviar al backend si lo deseas
  }

  toggleSongFavorite(song: any): void {
    song.favorita = !song.favorita;
    console.log("Canción guardada como favorita:", song?.id || null);
    // Aquí podrías enviar al backend si lo deseas
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