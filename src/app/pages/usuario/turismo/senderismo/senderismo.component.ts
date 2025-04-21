import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; 

@Component({
  selector: 'app-senderismo',
  standalone:true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,

  ],
  templateUrl: './senderismo.component.html',
  styleUrl: './senderismo.component.css'
})
export class SenderismoComponent {

  lugares = [
    {
      nombre: 'Mirador de la virgen de manare',
      ubicacion: 'Yopal, Casanare',
      distancia: '2.0 km',
      imagen: 'assets/senderismo1.jpg'
    },
    {
      nombre: 'Balcones del Cacique',
      ubicacion: 'Tauramena, Casanare',
      distancia: '10 km',
      imagen: 'assets/senderismo2.jpg'
    },
    {
      nombre: 'Parque temático Historia de piedra',
      ubicacion: 'Yopal, Casanare',
      distancia: '5.5 km',
      imagen: 'assets/senderismo3.jpg'
    }
  ];
}
