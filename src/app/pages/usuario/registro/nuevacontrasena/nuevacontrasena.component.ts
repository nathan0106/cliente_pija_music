import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {ChangeDetectionStrategy, inject} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { Router } from '@angular/router';
// limite-caracteres.directive.ts
import { Directive, HostListener } from '@angular/core';


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
  form: FormGroup;
  hidePassword = true;
  hideConfirm = true;

  passwordValidations = {
    length: false,
    uppercase: false,
    specialChar: false
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      password: [
        '',
        [Validators.required]
      ],
      confirmPassword: ['']
    });
  }

  ngOnInit(): void {
    this.password?.valueChanges.subscribe(value => {
      this.passwordValidations.length = value.length >= 8;
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
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  get passwordsMatch(): boolean {
    return this.password?.value === this.confirmPassword?.value;
  }

  onSubmit() {
    if (this.form.valid && this.passwordsMatch) {
      console.log('Formulario enviado:', this.form.value);
    }
  }

  readonly dialog = inject(MatDialog);

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    this.dialog.open(DialogAnimationsExampleDialog, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const maxLength = 8;
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.substring(0, maxLength);
    }
  }

}


@Component({
  selector: 'app-nuevacontrasena',
  templateUrl: 'dialogcontrasena.html',
  styleUrls: ['./dialogcontrasena.css'],
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAnimationsExampleDialog {
  private dialog = inject(MatDialog);

  openDialog(): void {
    this.dialog.open(NuevacontrasenaComponent, {
      maxWidth: '90vw',   // Máximo 90% del ancho
      width: 'auto',      // Que se adapte al contenido
      disableClose: true, // Que no se cierre haciendo clic afuera
    });
  }

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<NuevacontrasenaComponent>
  ) {}

  irALogin(): void {
    this.dialogRef.close(); // Primero cierra el diálogo
    this.router.navigate(['/login']); // Luego navega al login
  }

}


