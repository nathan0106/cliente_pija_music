
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-favoritos',
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './favoritos.component.html',
  styleUrl: './favoritos.component.css'
})
export class FavoritosComponent {
  @Input() cardCount: number = 7; // Valor por defecto

  cards = [
    { title: 'Jorge Albarracín', imageUrl: 'Fav1.png' },
    { title: 'Jorge Guerrero', imageUrl: 'Fav2.png' },
    { title: 'Walter Silva', imageUrl: 'Fav3.png' },
    { title: 'Yesid Ortiz', imageUrl: 'Fav4.png' },
    { title: 'Lorgio Rodríguez', imageUrl: 'Fav5.png' },
    { title: 'Jhon Onofre', imageUrl: 'Fav6.png' },
    { title: 'Jorge Calderón', imageUrl: 'Fav7.png' },
    { title: 'Yaguazo', imageUrl: 'Fav8.png' },
  ];

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }

}
