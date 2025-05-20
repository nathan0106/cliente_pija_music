import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-estilomusicaladministrador',
  imports: [
    CommonModule ,
    FormsModule
  ],
  templateUrl: './estilomusicaladministrador.component.html',
  styleUrl: './estilomusicaladministrador.component.css'
})
export class EstilomusicaladministradorComponent {
  estilos: any[] = [];

  estiloNuevo = {
    nombre: '',
    descripcion: '',
    instrumentos: ''
  };

  guardarEstilo() {
    this.estilos.push({ ...this.estiloNuevo });
    this.estiloNuevo = {
      nombre: '',
      descripcion: '',
      instrumentos: ''
    };
  }
}
