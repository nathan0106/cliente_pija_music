import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../services/api.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core'; // Agrega esto si usas <mat-option>



@Component({
  selector: 'app-registeradministrador',
  imports: [
     CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatIconModule,
    RouterModule,
    MatOptionModule,
    FormsModule
  ],
  templateUrl: './registeradministrador.component.html',
  styleUrl: './registeradministrador.component.css'
})
export class RegisteradministradorComponent {


 registerForm: FormGroup;
  hidePassword = true;
  hideConfirm = true;
  documentType: string = '';
  idNumber: string = '';

  constructor(private fb: FormBuilder, 
    private apiService: ApiService,
    private dialog: MatDialog) {
    this.registerForm = this.fb.group({
      Nombre: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Contraseña: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
      Celular: ['', Validators.required],
      Cedula: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  register() {
    if (this.registerForm.valid && this.passwordsMatch) {
      console.log('Registro exitoso', this.registerForm.value);
  
      this.apiService.postData('usuario', this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
  
          // abrir diálog
          this.dialog.open(DialogRegisterComponent, {
            maxWidth: '90vw',
            width: 'auto',
            disableClose: true
          });
        },
        error: (error) => {
          console.error('Error al enviar POST:', error);
        }
      });
    } else {
      console.log('Formulario inválido');
    }
  }

  passwordValidations = {
    length: false,
    uppercase: false,
    specialChar: false
  };

  ngOnInit(): void {
    this.password?.valueChanges.subscribe(value => {
      this.passwordValidations.uppercase = /[A-Z]/.test(value);
      this.passwordValidations.specialChar = /[^a-zA-Z0-9]/.test(value);
      this.password?.updateValueAndValidity({ emitEvent: false });
    });

    this.confirmPassword?.valueChanges.subscribe(() => {
      this.confirmPassword?.setErrors(
        this.passwordsMatch ? null : { mismatch: true }
      );
    });
  }

  get password() {
    return this.registerForm.get('Contraseña');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }

  get passwordsMatch(): boolean {
    return this.password?.value === this.confirmPassword?.value;
  }

    onLogin() {
    console.log('Login data:', {
      documentType: this.documentType,
      idNumber: this.idNumber,
      password: this.password,
    });
    // Aquí podrías conectar con tu servicio de autenticación
  }
}



import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dialogregister',
  standalone: true,
  templateUrl: './dialogregisterad.html',
  styleUrls: ['./dialogregisterad.css'],
  imports: [MatButtonModule]
})
export class DialogRegisterComponent {
  constructor(
    private dialogRef: MatDialogRef<DialogRegisterComponent>,
    private router: Router
  ) {}

  irALogin(): void {
    this.dialogRef.close();
    this.router.navigate(['/login']);
  }
}

