import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu-principal',
  imports:[
    CommonModule
  ],
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent {
  novedades = [
    { img: '/imag1.png', title: 'Música - Recuerda la esencia de la musica llanera' },
    { img: '/imag2.png', title: 'Cultura - conoce la diversidad del llano' },
    { img: '/imag3.png', title: 'Turismo - lugares mas visitados' },
    { img: '/imag4.png', title: 'Danza - Expresion artistica' }
  ];

  artistas = [
    { img: '/Art1.png', name: 'Yaguazo' },
    { img: '/Art2.png', name: 'Walter Silva' },
    { img: '/Art3.png', name: 'Ronald Arrieta' },
    { img: '/Art4.png', name: 'Mateo Benítez' },
    { img: '/Art5.png', name: 'Lalo Silva' },
    { img: '/Art6.png', name: 'El Cholo' }
  ];
}
