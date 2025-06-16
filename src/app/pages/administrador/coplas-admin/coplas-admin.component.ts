import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-coplas-admin',
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule
  ],
  templateUrl: './coplas-admin.component.html',
  styleUrl: './coplas-admin.component.css'
})
export class CoplasAdminComponent {
 autores: any[] = [];
  coplas: any[] = [];

  copla = {
    titulo: '',
    texto: '',
    autor: '',
  };

  constructor(private http: HttpClient) {
    this.cargarAutores();
  }

  cargarAutores() {
    this.http.get<any>('http://localhost:8082/v1/Autor_Coplas').subscribe((data) => {
      console.log('get autores',data.Data)
      this.autores = data.Data;
    });
  }

  actualizarNombreAutor() {
    // Ya se enlaza automáticamente con [(ngModel)]
  }

  guardarCopla() {
    const nuevaCopla = { ...this.copla };
    this.coplas.push(nuevaCopla);

    this.http.post('http://localhost:8082/v1/coplas', nuevaCopla).subscribe({
      next: (res) => console.log('Copla enviada', res,alert('enviado con exito')),
      error: (err) => console.error('Error al enviar la copla', err,alert('error a enviar')),
    });

    // Resetear campos
    this.copla.titulo = '';
    this.copla.texto = '';
    this.copla.autor = '';
  }
}
