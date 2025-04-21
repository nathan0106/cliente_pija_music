import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  imports: [],
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.css'
})
export class CodigoComponent {

  codigoIngresado: string = '';


  constructor(private router: Router) {}

  autoAdvance(event: any) {
    const input = event.target;
    const value = input.value;
  
    // Solo números
    if (!/^[0-9]$/.test(value)) {
      input.value = '';
      return;
    }
  
    // Enfocar el siguiente input si existe
    const nextInput = input.nextElementSibling;
    if (nextInput) {
      nextInput.focus();
    }
  }

  cancelar() {
    this.router.navigate(['/login']);
  }
  
  irANuevaContrasena() {
    this.router.navigate(['/nuevacontraseña']);
  }
}
