import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from '../alert/alert.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-codigoad',
  imports: [
    FormsModule,
  AlertComponent],
  templateUrl: './codigoad.component.html',
  styleUrl: './codigoad.component.css'
})
export class CodigoadComponent {

    @ViewChild('alertRef') alertComponent!: AlertComponent;


  constructor(private router: Router) {}

  codigo: string[] = ['', '', '', '', '', ''];
  codigoGuardado: string | null = localStorage.getItem('Codigo');
  codigoCompleto: boolean = false; 

  cancelar() {
    this.router.navigate(['/loginad']);
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
      this.alertComponent.show('No hay ningún código guardado. Por favor, solicita uno nuevo.');
      return;
    }
  
    const codigoIngresado = this.codigo.join('').trim();
  
    if (codigoIngresado === this.codigoGuardado.trim()) {
      this.router.navigate(['/nuevacontraseñaad']);
    } else {
      this.alertComponent.show('Código incorrecto, por favor inténtalo de nuevo.');
    }
  }

}
