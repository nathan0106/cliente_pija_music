import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-tipo-cultura-admin',
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  templateUrl: './tipo-cultura-admin.component.html',
  styleUrl: './tipo-cultura-admin.component.css'
})
export class TipoCulturaAdminComponent {

     nuevoTitulo = '';
   json_tipoCulura={
    Nombre:''  
   };
  titulos: string[] = [];

  constructor(private http: HttpClient) {}

  guardarTitulo() {
    const tituloTrim = this.nuevoTitulo.trim();
    if (tituloTrim) {


      // Guardar localmente en la tabla
      this.titulos.push(tituloTrim);
      console.log("Valor variable", tituloTrim)
      this.json_tipoCulura={
        Nombre:tituloTrim
      }

      let json_enviar=JSON.stringify(this.json_tipoCulura)

      console.log("este es el json",json_enviar)
      this.nuevoTitulo = '';

      // Enviar al CRUD
      this.http.post('http://localhost:8082/v1/Tipo_Cultura', json_enviar).subscribe({
      next: (res: any) => console.log('Guardado exitosamente', res, alert('guardado exitoso')),
      error: (err: any) => console.error('Error al guardar', err,alert('error a guadar')),
      });
    }
  }

}