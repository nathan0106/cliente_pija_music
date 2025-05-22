import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-estilomusicaladministrador',
  standalone: true,
  imports: [
    CommonModule ,
    FormsModule
  ],
  templateUrl: './estilomusicaladministrador.component.html',
  styleUrls: ['./estilomusicaladministrador.component.css']
})
export class EstilomusicaladministradorComponent {
   constructor(private apiService: ApiService) {}

  estilos: any = [];

  estiloNuevo = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };

  estiloJson_post = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };

  
 guardarEstilo() {
  this.estilos.push({ ...this.estiloNuevo });



  this.estiloJson_post = {
    NombreGenero: this.estiloNuevo.NombreGenero,
    InstrumentosPrincipales: this.estiloNuevo.InstrumentosPrincipales,
    DescripcionMusical: this.estiloNuevo.DescripcionMusical
  };

    this.estiloNuevo = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };
  let estiloNuevo_json = JSON.stringify(this.estiloJson_post);

 console.log('estilomusical  a enviar:', estiloNuevo_json);

this.apiService.postData('Estilo_Musical ', estiloNuevo_json).subscribe(
  (respuesta) => {
    console.log('estilomusical creado', respuesta);
    alert('Estilo musical creado exitosamente');
  },
  (error) => {
  console.error('Error al crear el estilomusical ', error);
  alert('Error al crear el estilomusical ');
 }
);
}

}