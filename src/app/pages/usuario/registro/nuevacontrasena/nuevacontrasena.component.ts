import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidationErrors, AbstractControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // <-- Agregá esto


@Component({
  selector: 'app-nuevacontrasena',
  standalone: true,
  imports: [
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  templateUrl: './nuevacontrasena.component.html',
  styleUrls: ['./nuevacontrasena.component.css']
})
export class NuevacontrasenaComponent {
  hidePassword1 = true;
  hidePassword2 = true;
  passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group(
      {
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  passwordMatchValidator(group: AbstractControl): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password !== confirm ? { notMatching: true } : null;
  }

 /*  getPasswordStrength(): string {
    const value = this.form.get('password')?.value || '';
  
    let strengthPoints = 0;
    if (/[A-Z]/.test(value)) strengthPoints++;      // mayúscula
    if (/[0-9]/.test(value)) strengthPoints++;      // número
    if (/[\W_]/.test(value)) strengthPoints++;      // símbolo
    if (value.length >= 8) strengthPoints++;        // longitud
  
    switch (strengthPoints) {
      case 4: return 'Fuerte';
      case 3: return 'Media';
      case 2: return 'Débil';
      default: return 'Muy débil';
    }
  } */
  
  /* getPasswordStrengthColor(): string {
    const strength = this.getPasswordStrength();
    switch (strength) {
      case 'Muy débil': return 'red';
      case 'Débil': return 'orange';
      case 'Media': return 'goldenrod';
      case 'Fuerte': return 'green';
      default: return '';
    }
  } */
  


    passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
      const password = group.get('password')?.value;
      const confirm = group.get('confirmPassword')?.value;
      return password === confirm ? null : { passwordsMismatch: true };
    }
  
    onSubmit() {
      if (this.passwordForm.valid) {
        console.log('Contraseñas válidas:', this.passwordForm.value);
      } else {
        console.log('Formulario inválido');
      }
    }


}
