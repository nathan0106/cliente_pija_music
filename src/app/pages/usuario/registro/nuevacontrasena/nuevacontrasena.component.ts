import { Component, OnInit, HostListener, inject, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-nuevacontrasena',
  standalone: true,
  templateUrl: './nuevacontrasena.component.html',
  styleUrls: ['./nuevacontrasena.component.css'],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
  ]
})
export class NuevacontrasenaComponent implements OnInit {
  form!: FormGroup;
  hidePassword = true;
  hideConfirm = true;

  passwordValidations = {
    length: false,
    uppercase: false,
    specialChar: false
  };

  returnTo: string = 'login';
constructor(
  private router: Router,
  private dialog: MatDialog,
  private fb: FormBuilder,
  private route: ActivatedRoute // <-- nuevo
) {}


 ngOnInit(): void {
  const tipo = localStorage.getItem('tipo');
  this.returnTo = tipo === 'admin' ? 'loginad' : 'login';

  this.form = this.fb.group({
    password: ['', Validators.required],
    confirmPassword: ['']
  });

  this.password?.valueChanges.subscribe((value: string) => {
    this.passwordValidations.length = value.length >= 8;
    this.passwordValidations.uppercase = /[A-Z]/.test(value);
    this.passwordValidations.specialChar = /[^a-zA-Z0-9]/.test(value);
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
      this.openDialog('200ms', '200ms');
    }
  }

 openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  const dialogRef = this.dialog.open(dialogcontrasena, {
    width: '300px',
    enterAnimationDuration,
    exitAnimationDuration,
    data: {
      returnTo: this.returnTo
    }
  });

  // Escuchar cuando se cierre y redirigir
  dialogRef.afterClosed().subscribe((redirectTo: string) => {
  this.router.navigate(['/' + redirectTo]);
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
  selector: 'dialog-contrasena',
  templateUrl: 'dialogcontrasena.html',
  styleUrls: ['./dialogcontrasena.css'],
  standalone: true,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class dialogcontrasena {
  returnTo: string = 'login';

  constructor(
    private router: Router,
    private dialogRef: MatDialogRef<dialogcontrasena>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    if (data?.returnTo) {
      this.returnTo = data.returnTo;
    }
  }

onAceptar(): void {
  // Solo cerrar el diálogo y pasar el destino
  this.dialogRef.close(this.data?.returnTo || 'login');
}


}





