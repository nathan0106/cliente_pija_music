import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
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
    { img: 'assets/img1.jpg', title: 'Música - el sabor de la tradición' },
    { img: 'assets/img2.jpg', title: 'Cultura - expresión del ser' },
    { img: 'assets/img3.jpg', title: 'Turismo - nuestras raíces' },
    { img: 'assets/img4.jpg', title: 'Danza - conexión cultural' }
  ];

  artistas = [
    { img: 'assets/artista1.jpg', name: 'Yaguazo' },
    { img: 'assets/artista2.jpg', name: 'Walter Silva' },
    { img: 'assets/artista3.jpg', name: 'Ronald Arrieta' },
    { img: 'assets/artista4.jpg', name: 'Mateo Benítez' },
    { img: 'assets/artista5.jpg', name: 'Lalo Silva' },
    { img: 'assets/artista6.jpg', name: 'El Cholo' }
  ];
}
