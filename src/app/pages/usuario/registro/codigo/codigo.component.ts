import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-codigo',
  templateUrl: './codigo.component.html',
  styleUrl: './codigo.component.css',
  standalone: true,
  imports: [
    FormsModule
  ]
})
export class CodigoComponent {

  constructor(private router: Router) {}

  codigo: string[] = ['', '', '', '', '', ''];
  codigoGuardado: string | null = localStorage.getItem('Codigo');
  codigoCompleto: boolean = false; 

  cancelar() {
    this.router.navigate(['/login']);
  }

  autoAdvance(event: any, index: number) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    const key = event.inputType;
  
    if (!/^[0-9]?$/.test(value)) {
      input.value = '';
      this.codigo[index] = '';
      return;
    }
  
    this.actualizarEstadoCodigo();
  
    if (value.length === 1 && key !== 'deleteContentBackward') {
      const nextInput = input.nextElementSibling as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  
    if (value === '' && key === 'deleteContentBackward') {
      const prevInput = input.previousElementSibling as HTMLInputElement;
      if (prevInput) {
        prevInput.focus();
      }
    }
  }

  actualizarEstadoCodigo() {
    this.codigoCompleto = this.codigo.every(d => d !== '');
  }

  verificarCodigo() {
    if (!this.codigoGuardado) {
      alert('No hay ningún código guardado. Por favor, solicita uno nuevo.');
      return;
    }
  
    const codigoIngresado = this.codigo.join('').trim();
  
    if (codigoIngresado === this.codigoGuardado.trim()) {
      this.router.navigate(['/nuevacontraseña']);
    } else {
      alert('Código incorrecto, por favor inténtalo de nuevo.');
    }
  }
}

