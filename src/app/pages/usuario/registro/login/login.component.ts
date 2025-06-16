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
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { AlertComponent } from '../../../administrador/alert/alert.component';
import { ViewChild } from '@angular/core';



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
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    AlertComponent

  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent {

    @ViewChild('alertRef') alertComponent!: AlertComponent;

registerForm: FormGroup;
 hidePassword = true;
apiUrl: string = 'http://localhost:8083/v1/usuario/login';




 constructor(private router: Router, private fb: FormBuilder, private http: HttpClient) {
 this.registerForm = this.fb.group({
  Email: ['', [Validators.required, Validators.email]],
  Contraseña: ['', [Validators.required, Validators.minLength(8)]],
  terms: [false, Validators.requiredTrue] 
});
 }

login() {
  if (this.registerForm.invalid) {
     this.alertComponent.show('Por favor llena todos los campos correctamente.');
    return;
  }

  const datos = this.registerForm.value;

  this.http.post<{ Data: { Caso: number, message: string } }>(this.apiUrl, datos).subscribe({
    next: (respuesta) => {
      const caso = respuesta.Data?.Caso;
      const mensaje = respuesta.Data?.message;
      console.log('Respuesta del servidor:', respuesta);

      if (caso === 2) {
         this.alertComponent.show('Inicio de sesión exitoso. Bienvenido.');
        localStorage.setItem('tipo', 'usuario');
        this.router.navigate(['/menu']);
      } else if (caso === 1) {
         this.alertComponent.show('El usuario no existe.');
      } else if (caso === 3) {
         this.alertComponent.show('La contraseña es incorrecta.');
      } else {
         this.alertComponent.show('Respuesta desconocida del servidor.');
      }
    },
    error: (error) => {
      console.error('Error al iniciar sesión:', error);
 this.alertComponent.show    }
  });
}


  goToRegister() {
    console.log('Botón de registro clickeado');
    this.router.navigate(['/register']);
  }


  recoverPassword() {
     this.alertComponent.show('Recuperar contraseña');
  localStorage.setItem('tipo', 'usuario'); // Guardas el tipo antes de redirigir
  this.router.navigate(['/nuevacontrasena']); // Vas a la vista compartida
  }

  createAccount() {
     this.alertComponent.show('Crear nueva cuenta');
  }
  

  
  
  
}
