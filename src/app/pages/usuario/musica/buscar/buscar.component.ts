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
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-buscar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  @Input() cardCount: number = 7;

  searchQuery = ''; // vincula el contenido del campo de texto con la variable

  cards = [
    { title: 'Huber Paredes', imageUrl: 'Fav9.png' },
    { title: 'Yesid Ortiz', imageUrl: 'play6.png' },
    { title: 'Andrea Mesa', imageUrl: 'Art8.png' },
    { title: 'Cholo Valderrama', imageUrl: 'Art7.png' },
    { title: 'Lorgio Rodríguez', imageUrl: 'play5.png' },
    { title: 'Milena Benites', imageUrl: 'play7.png' },
    { title: 'Jorge Calderón', imageUrl: 'Fav7.png' },
    { title: 'Yaguazo', imageUrl: 'Fav8.png' },
  ];

  filteredCards = [...this.cards];

  onSearch(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredCards = this.cards.filter(card =>
      card.title.toLowerCase().includes(query)
    );
  }

  navigateTo(route: string): void {
    console.log(`Ir a: ${route}`);
  }

  changeCategory(category: string): void {
    console.log(`Cambiar a categoría: ${category}`);
  }

  customize(): void {
    console.log('Personalización activada');
  }
}
