import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectChange } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {ViewEncapsulation } from '@angular/core';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-lugares-general',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule

  ],
  templateUrl: './lugares-general.component.html',
  styleUrl: './lugares-general.component.css',
  encapsulation: ViewEncapsulation.None
})
export class LugaresGeneralComponent {
  constructor(private apiService: ApiService) { }

  @ViewChild('carrusel') carrusel!: ElementRef;
  

  panelInfo = {
    titulo: 'Vive las Experiencia',
    descripcion: 'Elige una categoría y descubre actividades emocionantes y lugares que no olvidarás.'
  };

  categorias = [
    { value: 'senderismo', viewValue: 'Senderismo' },
    { value: 'actividad_familiar', viewValue: 'Actividad Familiar' },
    { value: 'lugares_historicos', viewValue: 'Lugares Históricos' },
    { value: 'restaurantes', viewValue: 'Restaurantes' },
    { value: 'eventos_culturales', viewValue: 'Eventos Culturales' },
  ];

  selectedCategoria = '';
  cards: any[] = [];
  detalles: any = null;

  dataPorCategoria: any = {};

  seleccionarCategoria() {
    this.cards = this.dataPorCategoria[this.selectedCategoria] || [];
    this.detalles = null;
  }

  selectedCard: any = null;
  verDetalles(card: any) {
    this.selectedCard = card;
    this.detalles = card.detalle;
  }

  cerrarDetalles() {
    this.detalles = null;
  }

  ngOnInit(): void {
    // Aquí va la lógica que quieres ejecutar al inicializar el componente
   // console.log('Componente inicializado');
   this.carga_informacion()
  }

  carga_informacion(){
        this.apiService.getData('lugares').subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          this.dataPorCategoria = response["Data"]

    
        },
        error: (error) => {
          console.error('Error al hacer el get:', error);
        }
      });
  
  }


  

  scrollCarrusel(direccion: 'left' | 'right') {
    const scrollAmount = 300;
    if (this.carrusel) {
      this.carrusel.nativeElement.scrollBy({
        left: direccion === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }


}
