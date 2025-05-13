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
    MatInputModule
  ],
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent {
  // Lista de artistas, cada uno con su nombre, imagen, y canciones.
  constructor(public dialog: MatDialog) {}
  artists = [
    {
      nombre: 'Jorge Albarracín',
      imagen: 'Art1.png',  // Ruta a la imagen del artista
      canciones: [
        { nombre: 'Gracias Mamá', duracion: '3:55', videoUrl: 'https://www.youtube.com/embed/WieyNhhYNfo' },
        { nombre: 'No Le Doy Un Paso Más', duracion: '3:33', videoUrl: 'https://www.youtube.com/embed/-WcKWPb9oPY' },
        { nombre: 'Que Te Perdone Mi Dios', duracion: '4:13', videoUrl: 'https://www.youtube.com/embed/NGNW_wBeDP0' },
        { nombre: ' Guaratarito Del Patio', duracion: '3:13', videoUrl: 'https://www.youtube.com/embed/hA7ALuYaXLo' },
      
      ]
    },
    {
      nombre: 'Jorge Guerrero',
      imagen: 'Fav7.png',
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
        { nombre: 'Cuando este llanero muera', duracion: '4:06', videoUrl: 'https://www.youtube.com/embed/3OHZw-eupd4' }
      ]
    },
    {
      nombre: 'Lorguio Rodriguez',
      imagen: 'Fav5.png',
      canciones: [
        { nombre: 'Hips Don’t Lie', duracion: '3:38', videoUrl: 'https://www.youtube.com/embed/DQYwqYBaQ1s' },
        { nombre: 'Waka Waka', duracion: '3:26', videoUrl: 'https://www.youtube.com/embed/pRpeEdMmmQ0' }
      ]
    },
    {
      nombre: 'Jhon onofre',
      imagen: 'Fav6.png',
      canciones: [
        { nombre: 'Hips Don’t Lie', duracion: '3:38', videoUrl: 'https://www.youtube.com/embed/DQYwqYBaQ1s' },
        { nombre: 'Waka Waka', duracion: '3:26', videoUrl: 'https://www.youtube.com/embed/pRpeEdMmmQ0' }
      ]
    },
    {
      nombre: 'Jorge Calderon',
      imagen: 'Fav7.png',
      canciones: [
        { nombre: 'Hips Don’t Lie', duracion: '3:38', videoUrl: 'https://www.youtube.com/embed/DQYwqYBaQ1s' },
        { nombre: 'Waka Waka', duracion: '3:26', videoUrl: 'https://www.youtube.com/embed/pRpeEdMmmQ0' }
      ]
    },
    {
      nombre: 'Yaguzo',
      imagen: 'Fav8.png',
      canciones: [
        { nombre: 'Hips Don’t Lie', duracion: '3:38', videoUrl: 'https://www.youtube.com/embed/DQYwqYBaQ1s' },
        { nombre: 'Waka Waka', duracion: '3:26', videoUrl: 'https://www.youtube.com/embed/pRpeEdMmmQ0' }
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



}
