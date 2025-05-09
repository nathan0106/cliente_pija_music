import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgIf, NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  standalone: true,
  selector: 'app-senderismo',
  imports:[
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    NgIf,
    NgFor,
    CommonModule
  ],
  templateUrl: './senderismo.component.html',
  styleUrls: ['./senderismo.component.css']
})
export class SenderismoComponent {
  lugarActivoId: number | null = null;

  constructor(private router: Router,
  ) {} 

  lugares = [
    {
      id: 1,
      nombre: 'Mirador de la virgen de manare.',
      ciudad: 'Yopal',
      departamento: 'Casanare',
      distancia: '2.6 km',
      imagen: 'mirador.jpg', // asegúrate que esta ruta sea correcta
      descripcion: [
        'El Mirador se alza como un símbolo de fe y belleza...',
        'Proporciona una vista climática exuberante...',
        'Popular para deportistas y caminantes...',
      ],
      
      frase: 'Ubicado a 2.6 km de la Marginal de la Selva hacia el cerro El Venado.',
    },
    // Agrega más objetos lugar aquí si lo deseas
  ];

  mostrarInformacion(id: number) {
    this.lugarActivoId = this.lugarActivoId === id ? null : id;
  }

  verDetalle(id: number) {
    this.router.navigate(['/senderismo', id]);
  }
}

