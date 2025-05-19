import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {
  constructor(private router: Router) {}

  hidePassword = true;

  goToRegister() {
    console.log('Botón de registro clickeado');
    this.router.navigate(['/register']);
  }

  login() {
    alert('Iniciando sesión...');
  }

  recoverPassword() {
    alert('Recuperar contraseña');
  localStorage.setItem('tipo', 'usuario'); // Guardas el tipo antes de redirigir
  this.router.navigate(['/nuevacontrasena']); // Vas a la vista compartida
  }

  createAccount() {
    alert('Crear nueva cuenta');
  }
  
  irAlMenu() {
    console.log(this)
    this.router.navigate(['/menu']); // Ruta a tu página de menú
  }

  
  
  
}
