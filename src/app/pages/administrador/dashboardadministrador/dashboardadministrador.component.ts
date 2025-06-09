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
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-dashboardadministrador',
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
    FormsModule,
    RouterModule,
  ],
  templateUrl: './dashboardadministrador.component.html',
  styleUrl: './dashboardadministrador.component.css'
})
export class DashboardadministradorComponent {
  
   constructor(private router: Router) {}
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
