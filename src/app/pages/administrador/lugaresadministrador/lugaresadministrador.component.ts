import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

interface SubtituloDetalle {
  titulo: string;
  descripcion: string;
}

interface Lugar {
  titulo: string;
  imagen: string;
  direccion: string;
  categoria: string;
  confirmado?: boolean;
  detalles: any[];
  subtitulos?: {titulo:string; descripcion:string}[]; // ← AGREGAR ESTA LÍNEA
  imagenes?: string[];
  imagenFondo?: string;
  texto: string;
}

@Component({
  selector: 'app-lugaresadministrador',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  templateUrl: './lugaresadministrador.component.html',
  styleUrls: ['./lugaresadministrador.component.css']
})
export class LugaresadministradorComponent {
  categorias: string[] = [
    'Senderismo',
    'Actividad familiar',
    'Lugares históricos',
    'Restaurantes',
    'Eventos culturales'
  ];

  categoriaSeleccionada = '';
  lugarSeleccionado: Lugar | null = null;

  nuevoLugar: Partial<Lugar> = {
    titulo: '',
    imagen: '',
    direccion: '',
    categoria: ''
  };

  detalle: any = {
    titulo: '',
    subtitulo: [''],
    texto: '',
    imagenFondo: '',
    imagenes: []
  };

  lugares: Lugar[] = [];

  onCategoriaChange() {
    this.nuevoLugar = {
      titulo: '',
      imagen: '',
      direccion: '',
      categoria: this.categoriaSeleccionada
    };
  }

  onImageUpload(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.nuevoLugar.imagen = file.name;
    }
  }

  guardarLugar() {
    this.lugares.push({
      ...(this.nuevoLugar as Lugar),
      confirmado: false,
      detalles: []
    });
    this.categoriaSeleccionada = '';
    this.nuevoLugar = {};
  }

 onLugarChange() {
  if (this.lugarSeleccionado) {
    this.detalle = {
      titulo: this.lugarSeleccionado.titulo || '',
      subtitulos: this.lugarSeleccionado?.subtitulos
  ? [...this.lugarSeleccionado.subtitulos.map(s => ({...s}))]
  : [{ titulo: '', descripcion: '' }],
 // Puedes eliminarlo si no lo usas
      texto: this.lugarSeleccionado.texto || '',
      imagenFondo: this.lugarSeleccionado.imagenFondo || '',
      imagenes: this.lugarSeleccionado.imagenes || []
    };

    // Asegura que haya al menos un campo subtítulo visible
    this.vistaDetalle = {
      titulo: this.detalle.titulo,
      subtitulos: this.lugarSeleccionado.subtitulos && this.lugarSeleccionado.subtitulos.length > 0
        ? [...this.lugarSeleccionado.subtitulos]
        : [''], // ← Esto asegura que aparezca un input
      texto: this.detalle.texto,
      imagenFondo: this.detalle.imagenFondo,
      imagenes: [...this.detalle.imagenes]
    };

    this.lugarConfirmado = null;
    this.vistaConfirmacion = false;
    this.lugarSeleccionado.subtitulos
    this.lugarSeleccionado!.imagenFondo = this.detalle.imagenFondo;

  }
}


  onFondoUpload(event: any): void {
  const archivo = event.target.files[0];
  if (archivo) {
    const lector = new FileReader();
    lector.onload = () => {
      this.detalle.imagenFondo = lector.result as string; // ⬅ Guarda como base64
    };
    lector.readAsDataURL(archivo);
  }
}


  onMultipleImagesUpload(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (input.files && input.files.length > 0) {
      this.detalle.imagenes = [];

      for (let i = 0; i < input.files.length; i++) {
        const file = input.files[i];
        const url = URL.createObjectURL(file);
        this.detalle.imagenes.push(url);
      }
    }
  }

  vistaConfirmacion = false;
  vistaDetalle: any = {};
  lugarConfirmado: any = null;

 guardarDetalle() {
  if (!this.lugarSeleccionado) return;

  this.lugarSeleccionado.titulo = this.detalle.titulo;
  this.lugarSeleccionado.texto = this.detalle.texto;
  this.lugarSeleccionado.subtitulos = this.detalle.subtitulos;
  this.lugarSeleccionado.imagenFondo = this.detalle.imagenFondo;
  this.lugarSeleccionado.imagenes = this.detalle.imagenes;

  this.vistaDetalle = { ...this.lugarSeleccionado };
  this.vistaConfirmacion = true;
}


  confirmarVista() {
    this.vistaConfirmacion = false;
    this.lugarConfirmado = { ...this.vistaDetalle };
    this.detalle = {};
  }

  confirmarLugar(lugar: Lugar) {
    lugar.confirmado = true;
  }

  get lugaresPorCategoria(): { [key: string]: Lugar[] } {
    return this.lugares.reduce((acc: any, lugar: Lugar) => {
      if (!acc[lugar.categoria]) {
        acc[lugar.categoria] = [];
      }
      acc[lugar.categoria].push(lugar);
      return acc;
    }, {});
  }

  // (Opcional) Método para usar en HTML si prefieres:
  tieneLugaresEnCategoria(): boolean {
    const lista = this.lugaresPorCategoria[this.categoriaSeleccionada];
    return !!(this.categoriaSeleccionada && lista && lista.length > 0);
  }

  agregarSubtitulo() {
  this.detalle.subtitulos.push({titulo:'',descripcion:''});
}

eliminarSubtitulo(index: number) {
  this.detalle.subtitulos.splice(index, 1);
}

guardarSubtitulo(index: number) {
  const subtitulo = this.detalle.subtitulos[index];

  if (subtitulo.titulo.trim() && subtitulo.descripcion.trim()) {
    console.log('Subtítulo guardado:', subtitulo);
    // Aquí puedes mostrar una notificación o cambiar el estado si es necesario
  } else {
    alert('Por favor completa tanto el subtítulo como la descripción.');
  }
}

verDetalleLugar(lugar: any) {
  this.lugarSeleccionado = lugar;

  this.detalle = {
    titulo: lugar.titulo,
    texto: lugar.texto,
    subtitulos: lugar.subtitulos || [],
    imagenFondo: lugar.imagenFondo || '',
    imagenes: lugar.imagenes || []
  };

  this.lugarConfirmado = null;
  this.vistaConfirmacion = false;
}

}
