import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-tipo-cultura-admin',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  templateUrl: './tipo-cultura-admin.component.html',
  styleUrls: ['./tipo-cultura-admin.component.css']
})
export class TipoCulturaAdminComponent implements OnInit {
  
  nuevoTitulo = '';
  nuevoSubtitulo = '';
  nuevaDescripcion = '';
  tituloGuardado = false;

  detalles: { subtitulo: string, descripcion: string }[] = [];
  culturasGuardadas: any[] = [];

  constructor(private http: HttpClient) {}
ngOnInit(): void {
  this.cargarCulturas();
}
  guardarTitulo() {
    const tituloTrim = this.nuevoTitulo.trim();
    if (tituloTrim) {
      this.tituloGuardado = true;
      console.log("Título guardado:", tituloTrim);
    }
  }

  guardarDetalle() {
    if (this.nuevoSubtitulo.trim() && this.nuevaDescripcion.trim()) {
      this.detalles.push({
        subtitulo: this.nuevoSubtitulo,
        descripcion: this.nuevaDescripcion
      });

      this.nuevoSubtitulo = '';
      this.nuevaDescripcion = '';
    }
  }

  guardarCultura() {
    if (!this.nuevoTitulo || this.detalles.length === 0) return;

    const jsonCultura = {
  nombre: this.nuevoTitulo,
  detalles: this.detalles
};

   const jsonEnviar = {
  Nombre: this.nuevoTitulo,
  Informacion: JSON.stringify({ detalles: this.detalles }),
  Activo: true
};


console.log("JSON a enviar:", jsonEnviar);

this.http.post('http://localhost:8082/v1/Tipo_Cultura', jsonEnviar, { responseType: 'json' })
      .subscribe({
        next: (response) => {
          alert('Guardado exitoso');
          console.log('Respuesta del servidor:', response);
          this.culturasGuardadas.push(jsonCultura);
          this.limpiarFormulario();
        },
        error: (error) => {
          alert('Error al guardar');
          console.error('Error:', error);
        }
      });
  }
   cargarCulturas() {
    this.http.get<any[]>('http://localhost:8082/v1/Tipo_Cultura')
      .subscribe({
        next: (data) => {
          this.culturasGuardadas = data.map(cultura => {
            let infoParseada: any = {};
            try {
              infoParseada = JSON.parse(cultura.Informacion || '{}');
            } catch (e) {
              console.error('Error al parsear informacion:', e);
            }

            return {
              id: cultura.Id,
              nombre: cultura.Nombre,
              detalles: infoParseada['detalles'] || [],
              activo: cultura.Activo
            };
          });

          console.log('Culturas cargadas:', this.culturasGuardadas);
        },
        error: (err) => {
          console.error('Error al cargar culturas:', err);
        }
      });
  }
  
  limpiarFormulario() {
    this.nuevoTitulo = '';
    this.nuevoSubtitulo = '';
    this.nuevaDescripcion = '';
    this.detalles = [];
    this.tituloGuardado = false;
  }

}
