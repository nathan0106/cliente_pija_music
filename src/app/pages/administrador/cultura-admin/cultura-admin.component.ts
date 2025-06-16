import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cultura-admin',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './cultura-admin.component.html',
  styleUrls: ['./cultura-admin.component.css']
})
export class CulturaAdminComponent {
  formGuardado = false;
  todoGuardado = false;
  mostrarVideoUrl = false;
  indiceSeleccionado: number = 1;

  mainImageBase64 = '';
  detalles: any[] = [];
  culturasGuardadas: any[] = [];

  mainForm: FormGroup;
  detalleForm: FormGroup;

  tiposCultura : any[] = [];;

  constructor(private fb: FormBuilder ,private  http: HttpClient) {
    this.cargarCultura();
    this.mainForm = this.fb.group({
      categoria: [''],
      titulo: [''],
      imagen:[''],
    });

    this.detalleForm = this.fb.group({
      subtitulo: [''],
      descripcion: [''],
      imagen: [''],
      videoUrl: ['']
    });
  }
  enviarCulturaABaseDeDatos(cultura: any) {
  this.http.post('http://localhost:8082/v1/Cultura', cultura).subscribe({
    next: (res) => {
      console.log('✅ Cultura guardada exitosamente:', res);
    },
    error: (err) => {
      console.error('❌ Error al guardar la cultura:', err);
    }
  });
}

  onCategoriaChange() {
    const cat = this.mainForm.get('categoria')?.value;
    console.log('cotegoria',cat)
     if (cat === 1) {
    this.indiceSeleccionado = 1;
  } else if (cat === 3) {
    this.indiceSeleccionado = 3;
  } else {
    this.indiceSeleccionado = 0;
  }

  }



  guardarCard() {
    if (this.mainForm.valid) {
      this.formGuardado = true;
      this.todoGuardado = false;
    }
  }

  agregarDetalle() {
    if (this.detalleForm.valid) {
      this.detalles.push({ ...this.detalleForm.value });
      this.detalleForm.reset();
    }
  }

 guardarJson() {
  if (!this.mainForm.valid || this.detalles.length === 0) return;

  const InformacionObj = {
    titulo: this.mainForm.value.titulo,
    imagen: this.mainForm.value.imagen,
    secciones: [...this.detalles],
  };

  const categoriaId = Number(this.mainForm.value.categoria);
  const categoriaNombre = this.tiposCultura.find(tc => tc.Id === categoriaId)?.Nombre || '';

  const finalJson = {
    IdTipoCultura: {
      Id: categoriaId
    },
    Informacion: JSON.stringify(InformacionObj),
    // Extras para mostrar en el frontend
    titulo: InformacionObj.titulo,
    imagen: InformacionObj.imagen,
    categoria: categoriaNombre,
    secciones: InformacionObj.secciones,
    videoUrl:
      this.indiceSeleccionado === 1 || this.indiceSeleccionado === 3
        ? this.detalles[0]?.videoUrl || ''
        : ''
  };

  this.culturasGuardadas.push(finalJson);

  // ✅ Envío al backend solo con las propiedades requeridas
  this.enviarCulturaABaseDeDatos({
    IdTipoCultura: finalJson.IdTipoCultura,
    Informacion: finalJson.Informacion
  });

  this.todoGuardado = true;

  // Limpieza de formularios
  this.mainForm.reset();
  this.detalleForm.reset();
  this.formGuardado = false;
  this.mostrarVideoUrl = false;
  this.mainImageBase64 = '';
  this.detalles = [];
}


  private convertFileToBase64(file: File, callback: (base64: string) => void) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => callback(reader.result as string);
  }
  cargarCultura() {
  this.http.get<any>('http://localhost:8082/v1/Tipo_Cultura').subscribe((data: any) => {
    console.log('get cultura', data.Data);
    this.tiposCultura = data.Data;
  });
  }
}

