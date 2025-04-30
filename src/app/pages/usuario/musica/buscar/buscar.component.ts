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
  selector: 'app-buscar',
  standalone: true,
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
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'] 
})
export class BuscarComponent {  
  @Input() cardCount: number = 7;

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

  constructor(private router: Router) {}

  navigateTo(link: string) {
    this.router.navigateByUrl(link);
  }
}
