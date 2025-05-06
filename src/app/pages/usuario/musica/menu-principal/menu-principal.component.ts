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
import { RouterModule, Router } from '@angular/router';
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
  // Inyección del Router para navegación entre rutas
  constructor(private router: Router) {}
  novedades = [
    {
      img: '/imag1.png',
      title: 'Música - Recuerda la esencia de la musica llanera',
      route: '/musica',
    },
    {
      img: '/imag2.png',
      title: 'Cultura - conoce la diversidad del llano',
      route: '/cultura',
    },
    {
      img: '/imag3.png',
      title: 'Turismo - lugares mas visitados',
      route: '/turismo',
    },
  ];

  artistas = [
    { img: '/Art1.png', name: 'Yaguazo', route: '/artistas/yaguazo' },
    { img: '/Art2.png', name: 'Walter Silva', route: '/artistas/walter-silva' },
    { img: '/Art3.png', name: 'Reinal Armas', route: '/artistas/reinal-armas' },
    { img: '/Art4.png', name: 'Milena Benitez', route: '/artistas/milena-benitez' },
    { img: '/Art5.png', name: 'Luis Silva', route: '/artistas/luis-silva' },
    { img: '/Art6.png', name: 'El Cholo', route: '/artistas/el-cholo' },
  ];

  // Mensajes simulados para el asistente virtual
  messages = [{ text: '¡Hola! ¿En qué puedo ayudarte hoy?' }];

  // Variables para entrada de usuario y búsqueda
  userInput = '';
  searchQuery = '';

  // Método de navegación que usa el Router para ir a la ruta especificada
  navigateTo(route: string) {
    console.log(`Navegando a ${route}`);
    this.router.navigate([route]);
  }

  changeCategory(category: string) {
    console.log(`Mostrando categoría: ${category}`);
  }
  onSearch() {
    console.log(`Buscando: ${this.searchQuery}`);
  }

  // Envía un mensaje en el chat y muestra una respuesta simulada
  sendMessage() {
    if (this.userInput.trim()) {
      this.messages.push({ text: this.userInput });
      this.userInput = '';

      // Simula respuesta automática del asistente
      setTimeout(() => {
        this.messages.push({ text: '¿Te gustaría ver más novedades o artistas?' });
      }, 1000);
    }
  }

  // Acción al iniciar una búsqueda desde otro botón
  search() {
    console.log('Iniciando búsqueda...');
  }

  // Acción para personalizar opciones
  customize() {
    console.log('Personalizando opciones...');
  }

  // Acción para mostrar playlists
  goToPlaylists() {
    console.log('Mostrando playlists...');
  }

  // Acción para mostrar favoritos
  navigateToFavorites() {
    console.log('Mostrando favoritos');
  }
}
