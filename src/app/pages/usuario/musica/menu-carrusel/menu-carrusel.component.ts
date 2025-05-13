import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-menu-carrusel',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule, 
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './menu-carrusel.component.html',
  styleUrls: ['./menu-carrusel.component.css']
})
export class MenuCarruselComponent {

   constructor(private router: Router) {}

  @ViewChild('carrusel') carrusel!: ElementRef;

  novedades = [
    {
      img: '/imag1.png',
      title: 'Música - Recuerda la esencia de la musica llanera',
      route: '/playlist',
    },
    {
      img: '/imag2.png',
      title: 'Cultura - conoce la diversidad del llano',
      route: '/instrumentos',
    },
    {
      img: '/imag3.png',
      title: 'Turismo - lugares mas visitados',
      route: '/lugares',
    },
  ];

  panelInfo = {
    titulo: 'Artistas',
    descripcion: 'Descubre informacion sobre tus artistas favoritos.'
  };

  // Las tarjetas ya no dependen de la categoría seleccionada
  cards: any[] = [
    {
      titulo: 'Yaguazo',
      imagen: '/Art1.png',
      detalle: {
        titulo: 'Mirador virgen de Manare',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'HISTORIA' },
          { tipo: 'texto', contenido: 'El Mirador de la Virgen de Manare se alza como un símbolo de fe y belleza en la ciudad de Yopal, Casanare.' },
          { tipo: 'subtitulo', contenido: 'Un oasis de paz y naturaleza' },
          { tipo: 'texto', contenido: 'El mirador sorprende con su clima exuberante, donde la danza de nubes, brisa y sol crea un microclima perfecto.' },
          { tipo: 'subtitulo', contenido: 'casi que no' },
        ],
        fondo: 'mirador1.jpg'
      }
    },
    {
      titulo: 'Walter Silva',
      imagen: 'Art2.png',
      detalle: {
        titulo: 'Balcones del Cacique',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'Un águila vigilante sobre el llano' },
          { tipo: 'texto', contenido: 'Imagina un lugar majestuoso, encaramado sobre las montañas como un águila vigilante que custodia la llanura.' }
        ],
        fondo: 'cacique4.jpg'
      }
    },
    {
      titulo: 'Reinal Armas',
      imagen: 'Art3.png',
      detalle: {
        titulo: 'Parque Tematico-Historia de Piedra',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'HISTORIA' },
          { tipo: 'texto', contenido: 'En las alturas de Yopal, a solo 10 minutos de la ciudad, se encuentra el Parque Temático Historias de Piedra.' }
        ],
        fondo: 'historia4.gif'
      }
    },
     {
      titulo: 'Milena Benitez',
      imagen: 'Art4.png',
      detalle: {
        titulo: 'Parque Tematico-Historia de Piedra',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'HISTORIA' },
          { tipo: 'texto', contenido: 'En las alturas de Yopal, a solo 10 minutos de la ciudad, se encuentra el Parque Temático Historias de Piedra.' }
        ],
        fondo: 'historia4.gif'
      }
    } ,
     {
      titulo: 'Luis Silva',
      imagen: 'Art5.png',
      detalle: {
        titulo: 'Parque Tematico-Historia de Piedra',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'HISTORIA' },
          { tipo: 'texto', contenido: 'En las alturas de Yopal, a solo 10 minutos de la ciudad, se encuentra el Parque Temático Historias de Piedra.' }
        ],
        fondo: 'historia4.gif'
      }
    },
      {
      titulo: 'El Cholo',
      imagen: 'Art6.png',
      detalle: {
        titulo: 'Parque Tematico-Historia de Piedra',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'HISTORIA' },
          { tipo: 'texto', contenido: 'En las alturas de Yopal, a solo 10 minutos de la ciudad, se encuentra el Parque Temático Historias de Piedra.' }
        ],
        fondo: 'historia4.gif'
      }
    }
  ];

  detalles: any = null;

  selectedCard: any = null;

  verDetalles(card: any) {
    this.selectedCard = card;
    this.detalles = card.detalle;
  }

  cerrarDetalles() {
    this.detalles = null;
  }

  // Función para mover el carrusel a la izquierda o derecha
  scrollCarrusel(direccion: 'left' | 'right') {
    const scrollAmount = 300;
    if (this.carrusel) {
      this.carrusel.nativeElement.scrollBy({
        left: direccion === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

    navigateTo(route: string) {
    console.log(`Navegando a ${route}`);
    this.router.navigate([route]);
  }

}
