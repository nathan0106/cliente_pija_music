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

import { ApiService } from '../../../../services/api.service';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
// limite-caracteres.directive.ts
import { Directive, HostListener } from '@angular/core';


@Component({
  selector: 'app-register',
  standalone: true,
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
    RouterModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {
  registerForm: FormGroup;
  hidePassword = true;
  hideConfirm = true;

  constructor(private fb: FormBuilder, private apiService: ApiService ) {
    this.registerForm = this.fb.group({
      Nombres: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Contraseña: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      Apellido: ['', Validators.required],
      terms: [false, Validators.requiredTrue]
    });
  }

  register() {
    if (this.registerForm.valid) {
      console.log('Registro exitoso', this.registerForm.value);
      this.apiService.postData('usuario', this.registerForm.value).subscribe({
        next: (response) => {
          console.log('Respuesta del servidor:', response);
          {}
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
  
        // Disparar validaciones manualmente
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
  
    onSubmit() {
      if (this.registerForm.valid && this.passwordsMatch) {
        console.log('Formulario enviado:', this.registerForm.value);
      }
    }
  
    readonly dialog = inject(MatDialog);
  
    @HostListener('input', ['$event'])
    onInputChange(event: any) {
      const maxLength = 8;
      if (event.target.value.length > maxLength) {
        event.target.value = event.target.value.substring(0, maxLength);
      }
    }

     openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
        this.dialog.open(DialogAnimationsExampleDialog, {
          width: '250px',
          enterAnimationDuration,
          exitAnimationDuration,
        });
      }

      
  }







    @Component({
      selector: 'app-nuevacontrasena',
      templateUrl: 'dialogregister.html',
      styleUrls: ['./dialogregister.css'],
      imports: [MatButtonModule],
      changeDetection: ChangeDetectionStrategy.OnPush,
    })
    export class DialogAnimationsExampleDialog {
      private dialog = inject(MatDialog);
    
      openDialog(): void {
        this.dialog.open(RegisterComponent, {
          maxWidth: '90vw',   // Máximo 90% del ancho
          width: 'auto',      // Que se adapte al contenido
          disableClose: true, // Que no se cierre haciendo clic afuera
        });
      }
    
      constructor(
        private router: Router,
        private dialogRef: MatDialogRef<RegisterComponent>
      ) {}
    
      irALogin(): void {
        this.dialogRef.close(); // Primero cierra el diálogo
        this.router.navigate(['/login']); // Luego navega al login
      }
    
}

