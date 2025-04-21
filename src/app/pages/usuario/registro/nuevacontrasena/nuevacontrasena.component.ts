import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({

  selector: 'app-nuevacontrasena',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './nuevacontrasena.component.html',
  styleUrls: ['./nuevacontrasena.component.css']
})
export class NuevacontrasenaComponent {

  hidePassword1 = true;
  hidePassword2 = true;

  constructor(private router: Router) {}

  cancelar() {
    this.router.navigate(['/login']);
  }

  enviar() {
    this.router.navigate(['/login']);
  }

}
