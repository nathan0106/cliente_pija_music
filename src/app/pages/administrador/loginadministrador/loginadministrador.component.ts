import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { Router, RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-loginadministrador',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    RouterModule,
    AlertComponent
  ],
  templateUrl: './loginadministrador.component.html',
  styleUrls: ['./loginadministrador.component.css']
})
export class LoginadministradorComponent {
  @ViewChild('alertRef') alertComponent!: AlertComponent;

  registerForm: FormGroup;
  hidePassword = true;
  apiUrl: string = 'http://localhost:8084/v1/Administrador';

  constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      Cedula: ['', Validators.required],
      Contraseña: ['', [Validators.required, Validators.minLength(8)]],
      terms: [false, Validators.requiredTrue]
    });
  }

  login() {
  if (this.registerForm.invalid) {
    this.alertComponent.show('Por favor completa todos los campos correctamente.');
    return;
  }

  const datos = {
    Cedula: this.registerForm.value.Cedula,
    Contraseña: this.registerForm.value.Contraseña
  };

  const queryUrl = `${this.apiUrl}?query=Cedula:${datos.Cedula}`;

  console.log('Consulta al CRUD:', queryUrl);

  this.http.get<any>(queryUrl).subscribe({
    next: (respuesta) => {
      console.log('Respuesta del servidor:', respuesta);

      // Verificar que la respuesta tenga datos
      if (!respuesta || !Array.isArray(respuesta.Data) || respuesta.Data.length === 0) {
        this.alertComponent.show('El administrador no existe.');
        return;
      }

      const admin = respuesta.Data[0];

      if (admin.Contraseña === datos.Contraseña) {
        this.alertComponent.show('Inicio de sesión exitoso.');
        localStorage.setItem('tipo', 'administrador');
        this.router.navigate(['/dashboardadministrador/artista']);
      } else {
        this.alertComponent.show('La contraseña es incorrecta.');
      }
    },
    error: (error) => {
      console.error('Error al iniciar sesión:', error);
      this.alertComponent.show('Error al conectar con el servidor.');
    }
  });
}


  recoverPassword() {
    this.alertComponent.show('Recuperar contraseña');
    localStorage.setItem('tipo', 'admin');
    this.router.navigate(['/nuevacontrasena']);
  }

  createAccount() {
    this.alertComponent.show('Crear nueva cuenta');
  }

  goToRegister() {
    this.router.navigate(['/registerad']);
  }
}
