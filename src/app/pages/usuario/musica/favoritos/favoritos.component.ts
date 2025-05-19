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
    MatInputModule
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
 
  constructor(public dialog: MatDialog) {}
  artists = [
    {
      nombre: 'Jorge Albarracín',
      imagen: 'Art9.png',  // Ruta a la imagen del artista
      canciones: [
      { nombre: 'Gracias Mamá', duracion: '3:55', videoUrl: 'https://www.youtube.com/embed/WieyNhhYNfo' },
      { nombre: 'No Le Doy Un Paso Más', duracion: '3:33', videoUrl: 'https://www.youtube.com/embed/-WcKWPb9oPY' },
      { nombre: 'Que Te Perdone Mi Dios', duracion: '4:13', videoUrl: 'https://www.youtube.com/embed/NGNW_wBeDP0' },
      { nombre: ' Guaratarito Del Patio', duracion: '3:13', videoUrl: 'https://www.youtube.com/embed/hA7ALuYaXLo' },
      ],
      favorito: false
    },
    {
      nombre: 'Jorge Guerrero',
      imagen: 'Fav2.png',
      canciones: [
      { nombre: 'Aguacero del Recuerdo', duracion: '4:01', videoUrl: 'https://www.youtube.com/embed/KQdm0VbeQGw' },
      { nombre: 'Mi Propio Grito Guerrero (A Cielo Abierto)', duracion: '20:16', videoUrl: 'https://www.youtube.com/embed/6Nai2SgowTc' },
      { nombre: 'Las Tardes Grises de Junio', duracion: '4:21', videoUrl: 'https://www.youtube.com/embed/7haMDWrE0J0' },
      { nombre: 'Añoranzas', duracion: '3:46', videoUrl: 'https://www.youtube.com/embed/pcxSiqOuASk' },
      ]
    },
    {
      nombre: 'Walter silva',
      imagen: 'Fav3.png',
      canciones: [
      { nombre: 'MI LLANERA FAVORITA ', duracion: '4:28', videoUrl: 'https://www.youtube.com/embed/ZuVMd-h4c34' },
      { nombre: 'EL CHINO DE LOS MANDADOS ', duracion: '3:54', videoUrl: 'https://www.youtube.com/embed/jxqhhSbrOz0' },
      { nombre: 'Lo Que Fue Fue', duracion: '3:19', videoUrl: 'https://www.youtube.com/embed/fscvXLnv8Y0' },
      { nombre: 'LA NOVIA DEL HOMBRE POBRE  ', duracion: '2:51', videoUrl: 'https://www.youtube.com/embed/ExX3hbjf5aI' },
      ]
    },
    {
      nombre: 'Yesid Ortiz',
      imagen: 'Fav4.png',
      canciones: [
      { nombre: 'Cuando este llanero muera', duracion: '3:53', videoUrl: 'https://www.youtube.com/embed/ejSf_3leEyc' },
      { nombre: 'Me Cansé y Tiré la Toalla ', duracion: '4:06', videoUrl: 'https://www.youtube.com/embed/3OHZw-eupd4' },
      { nombre: 'Dos corazones al tiempo', duracion: '4:09', videoUrl: 'https://www.youtube.com/embed/pfvEH5rglrI' },
      { nombre: 'Corazon roto', duracion: '2:59', videoUrl: 'https://www.youtube.com/embed/Ve9PDNJv86k' }
      ]
    },
    {
      nombre: 'Lorguio Rodriguez',
      imagen: 'Fav5.png',
      canciones: [
      { nombre: 'Yo quiero tener un fundo', duracion: '3:18', videoUrl: 'https://www.youtube.com/embed/996JIGoYjog' },
      { nombre: 'ME PREOCUPA MI VEJEZ ', duracion: '2:52', videoUrl: 'https://www.youtube.com/embed/HLmdz-Z7Lg0' },
      { nombre: 'Volvió El Gavilán Coplero', duracion: '3:45', videoUrl: 'https://www.youtube.com/embed/lhXHdsL2ouQ' },
      { nombre: 'ORACION AL PADRE ETERNO ', duracion: '2:57', videoUrl: 'https://www.youtube.com/embed/NBcJsJnjG6I' },
      ]
    },
    {
      nombre: 'Jhon onofre',
      imagen: 'Fav6.png',
      canciones: [
      { nombre: 'Pa Que Deje ', duracion: '3:35', videoUrl: 'https://www.youtube.com/embed/CydZeurhiKs' },
      { nombre: 'Debajo Del Sombrero', duracion: '3:13', videoUrl: 'https://www.youtube.com/embed/lS2HX6h_c6I' },
      { nombre: 'A Usted', duracion: '3:22', videoUrl: 'https://www.youtube.com/embed/K1XDPF8xVf0' },
      { nombre: 'Eternos', duracion: '34:57', videoUrl: 'https://www.youtube.com/embed/R4r0MwLYKT8' }
      ]
    },
    {
      nombre: 'Jorge Calderon',
      imagen: 'Fav7.png',
      canciones: [
      { nombre: 'Suerte', duracion: '2:48', videoUrl: 'https://www.youtube.com/embed/lPNtoq234oE' },
      { nombre: 'En la Raya', duracion: '3:51', videoUrl: 'https://www.youtube.com/embed/lM2nOzVoDKQ' },
      { nombre: 'El Campeón de Tu Amor ', duracion: '4:05', videoUrl: 'https://www.youtube.com/embed/X5nJUhkTn2Y' },
      { nombre: 'Tatuada a Mi Alma', duracion: '3:38', videoUrl: 'https://www.youtube.com/embed/g7Uvm5igBMw' }
      ]
    },
    {
      nombre: 'Yaguazo',
      imagen: 'Fav8.png',
      canciones: [
      { nombre: 'Llano Viejo', duracion: '3:35', videoUrl: 'https://www.youtube.com/embed/OQVgYu0XVDU' },
      { nombre: 'El Regreso', duracion: '3:08', videoUrl: 'https://www.youtube.com/embed/SLp6atZGtak' },
      { nombre: 'Dejame Que te Quiera', duracion: '3:03', videoUrl: 'https://www.youtube.com/embed/rd_D6paJAP8' },
      { nombre: 'Te Digo Adios', duracion: '4:55', videoUrl: 'https://www.youtube.com/embed/cuwLDBc8lnU' }
      ]
    }
    // Agrega más artistas según sea necesario
  ];

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

}
