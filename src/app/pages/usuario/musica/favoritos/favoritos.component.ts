
import { Component, Input } from '@angular/core';
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


@Component({
  selector: 'app-favoritos',
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
