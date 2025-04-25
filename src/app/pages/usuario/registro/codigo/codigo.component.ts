import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-codigo',
  imports: [],
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.css'
})
export class CodigoComponent {

  constructor(private router: Router) {}

  codigoGuardado = localStorage.getItem('Codigo');
  codigo: string[] = ['', '', '', '', '', ''];
  codigoIngresado: string = '';
  

  cancelar() {
    this.router.navigate(['/login']);
  }


  autoAdvance(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const key = event.inputType; // Detecta el tipo de acción
  
    if (!/^[0-9]?$/.test(value)) {
      input.value = '';
      return;
    }
  
    // Si escriben un número y hay un siguiente input
    if (value.length === 1 && key !== 'deleteContentBackward') {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  
    // Si borran (retroceden)
    if (value === '' && key === 'deleteContentBackward') {
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  verificarCodigo() {
    const codigoGuardado = localStorage.getItem('Codigo');
  
    if (!codigoGuardado) {
      alert('No hay ningún código guardado. Por favor, solicita uno nuevo.');
      return;
    }
  
    const codigoIngresado = this.codigo.join('').trim();
  
    if (codigoIngresado === codigoGuardado.trim()) {
      this.router.navigate(['/nuevacontraseña']);
    } else {
      alert('Código incorrecto, por favor inténtalo de nuevo.');
    }
  }
}
