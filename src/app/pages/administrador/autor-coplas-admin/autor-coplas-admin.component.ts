import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-autor-coplas-admin',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './autor-coplas-admin.component.html',
  styleUrl: './autor-coplas-admin.component.css'
})
export class AutorCoplasAdminComponent {
  

  autor = {
    NombreAutor: '',
    BiografiaAutor: '',
    ImagenVideo :'',
    
  };
  json_Autor_Coplas={
    NombreAutor:'',
    BiografiaAutor:'',
    ImagenVideo:'',

  }

  autores: any[] = [];

  constructor(private http: HttpClient) {}


  

  guardarAutor() {
    if (!this.autor.NombreAutor || !this.autor.BiografiaAutor || !this.autor.ImagenVideo) {
      alert('Por favor completa todos los campos.');
      return;

    }

    // Guardar en la lista local
    const nuevoAutor = { ...this.autor };
    this.autores.push(nuevoAutor);
    console.log('autor',nuevoAutor)
    console.log('biografia',nuevoAutor.BiografiaAutor)
    console.log('url',nuevoAutor.ImagenVideo)
    this.json_Autor_Coplas={
      NombreAutor:nuevoAutor.NombreAutor,
      BiografiaAutor:nuevoAutor.BiografiaAutor,
      ImagenVideo:nuevoAutor.ImagenVideo,
    }
    let json_enviar=JSON.stringify(this.json_Autor_Coplas)

    // Enviar al MID como JSON
    this.http.post('http://localhost:8082/v1/Autor_Coplas', nuevoAutor).subscribe({
      next: (res) => console.log('Autor enviado al MID', res,alert('guardado exitoso')),
      error: (err) => console.error('Error al enviar al MID', err,alert('error al enviar'))
    });

    // Limpiar formulario
    this.autor = { NombreAutor: '', BiografiaAutor: '', ImagenVideo:'', };
  }
}
