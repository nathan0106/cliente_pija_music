import { Component } from '@angular/core';
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
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrl: './menu-principal.component.css',
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
    RouterModule, 
    FormsModule,

  ],
  
})

export class MenuPrincipalComponent {
// Datos de ejemplo
novedades = [
  { img: '/imag1.png', title: 'Música - Recuerda la esencia de la musica llanera' },
  { img: '/imag2.png', title: 'Cultura - conoce la diversidad del llano' },
  { img: '/imag3.png', title: 'Turismo - lugares mas visitados' },

];

artistas = [
  { img: '/Art1.png', name: 'Yaguazo' },
  { img: '/Art2.png', name: 'Walter Silva' },
  { img: '/Art3.png', name: 'Reinal Armas' },
  { img: '/Art4.png', name: 'Milena Benitez' },
  { img: '/Art5.png', name: 'Luis Silva' },
  { img: '/Art6.png', name: 'El Cholo' }
];

messages = [
  { text: '¡Hola! ¿En qué puedo ayudarte hoy?' },
];
userInput = '';
searchQuery = '';

// Método para navegar
navigateTo(section: string) {
  console.log(`Navegando a ${section}`);
  // Aquí va la lógica de navegación
}

// Método para manejar el cambio de categoría
changeCategory(category: string) {
  console.log(`Mostrando categoría: ${category}`);
  // Aquí va la lógica para mostrar los contenidos de la categoría seleccionada
}

// Método para buscar
onSearch() {
  console.log(`Buscando: ${this.searchQuery}`);
}

// Método para enviar un mensaje
sendMessage() {
  if (this.userInput.trim()) {
    this.messages.push({ text: this.userInput });
    this.userInput = '';
    
    // Simulamos una respuesta del asistente
    setTimeout(() => {
      this.messages.push({ text: '¿Te gustaría ver más novedades o artistas?' });
    }, 1000);
  }
}

// Método para simular búsqueda
search() {
  console.log('Iniciando búsqueda...');
}

// Método para personalizar
customize() {
  console.log('Personalizando opciones...');
}

// Método para ir a Playlists
goToPlaylists() {
  console.log('Mostrando playlists...');
}

// Método para ir a Favoritos
navigateToFavorites() {
  console.log('Mostrando favoritos');
 }
}
