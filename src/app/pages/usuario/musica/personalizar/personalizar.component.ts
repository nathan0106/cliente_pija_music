import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personalizar',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule ,

  ],
  templateUrl: './personalizar.component.html',
  styleUrl: './personalizar.component.css'
})
export class PersonalizarComponent {

username: string = '';
  email: string = '';
  password: string = '';

  constructor(private router: Router) {} 

  iniciarSesion() {
    console.log('Iniciando sesión con:', this.username, this.email, this.password);
    // Redirige a la ruta /register
    this.router.navigate(['/register']);
  }

  cerrarSesion() {
    console.log('Sesión cerrada');
    this.username = '';
    this.email = '';
    this.password = '';
    // Redirige a la ruta /menu
    this.router.navigate(['/dashboardmusica/menu']);
  }
}
