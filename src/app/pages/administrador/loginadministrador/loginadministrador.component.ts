import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core'; // Agrega esto si usas <mat-option>
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';





@Component({
  selector: 'app-loginadministrador',
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule
  ],
  templateUrl: './loginadministrador.component.html',
  styleUrl: './loginadministrador.component.css'
})
export class LoginadministradorComponent {

  documentType: string = '';
  idNumber: string = '';
  password: string = '';

   constructor(private router: Router) {}

  hidePassword = true;


  login() {
    alert('Iniciando sesión...');
  }

  recoverPassword() {
    alert('Recuperar contraseña');
  localStorage.setItem('tipo', 'admin'); // Establece que es un administrador
  this.router.navigate(['/nuevacontrasena']); // Redirige al componente compartido
  }

  createAccount() {
    alert('Crear nueva cuenta');
  }
  



  onLogin() {
    console.log('Login data:', {
      documentType: this.documentType,
      idNumber: this.idNumber,
      password: this.password,
    });
    // Aquí podrías conectar con tu servicio de autenticación
  }

  goToRegister() {
    console.log('Botón de registro clickeado');
    this.router.navigate(['/registerad']);
  }


}
