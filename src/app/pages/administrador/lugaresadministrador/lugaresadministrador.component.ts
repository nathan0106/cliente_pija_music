
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ApiCrudService } from '../../../services/api_crud.services';

interface SubtituloDetalle {
  titulo: string;
  descripcion: string;
}

interface Lugar {
  titulo: string;
  imagen: string;
  imagenVideo?: string; // ✅ Agregado
  direccion: string;
  categoria: string;
  confirmado?: boolean;
  detalles: any[];
  subtitulos?: {titulo:string; descripcion:string}[]; // ← AGREGAR ESTA LÍNEA
  imagenes?: string[];
  imagenFondo?: string;
  texto: string;
  ciudad: string;
  horario: string;
  idTipoLugar: number;
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
  styleUrl: './lugaresadministrador.component.css'
})
export class LugaresadministradorComponent {

  constructor(private apicrudService: ApiCrudService) { }

  
  

  categorias: string[] = [
    'Senderismo',
    'Actividad familiar',
    'Lugares históricos',
    'Restaurantes',
    'Eventos culturales'
  ];

  categoriaSeleccionada = '';
  lugarSeleccionado: Lugar | null = null;
  

nuevoLugar: Partial<Lugar> & { imagenFondo?: string; imagenes?: string[] } = {
  titulo: '',
  imagen: '',
  imagenVideo: '',
  direccion: '',
  categoria: '',
  imagenFondo: '',
  imagenes: []
};


  imagenArchivo: File | null = null; // ← NUEVO: archivo de imagen seleccionado

  detalle: any = {
    titulo: '',
    subtitulo: [{ titulo: '', descripcion: '' }],
    texto: '',
    imagenes: []
  };

  

  detalle_lugar:any = {
    tipo: '',
    contenido:''

  }

  detalle_imagen:any={
    imagen:'',
    imagenes:[],
    fondo:''
  }

  post_lugar: any = {
    NombreLugar:'',
    Direccion:'',
    Ciudad:'',
    DescripcionLugares: this.detalle_lugar,
    ImagenVideo: this.detalle_imagen,
    Horario:'',
    IdTipoLugares: {
      Id:0
    }
  };

  lugares: Lugar[] = [];

  // aqui va el get para mostrar tipo lugar, traer el campo Nombre y el Id

  
  
  postLugarCompleto() {
  if (!this.lugarSeleccionado) {
    this.mostrarMensaje('Debes seleccionar un lugar para publicarlo.', 'error');
    return;
  }

  const descripcionLugares: { tipo: string; contenido: string }[] = [];

  for (const sub of this.lugarSeleccionado.subtitulos || []) {
    if (sub.titulo) descripcionLugares.push({ tipo: 'subtitulo', contenido: sub.titulo });
    if (sub.descripcion) descripcionLugares.push({ tipo: 'texto', contenido: sub.descripcion });
  }

  if (this.lugarSeleccionado.texto?.trim()) {
    descripcionLugares.push({ tipo: 'texto', contenido: this.lugarSeleccionado.texto });
  }

  const imagenVideo = {
    imagen: this.lugarSeleccionado.imagen || '',
    imagenes: this.lugarSeleccionado.imagenes || [],
    fondo: this.lugarSeleccionado.imagenFondo || ''
  };

  const dataPost = {
    NombreLugar: this.lugarSeleccionado.titulo,
    Direccion: this.lugarSeleccionado.direccion || '',
    Ciudad: this.lugarSeleccionado.ciudad || '',
    DescripcionLugares: descripcionLugares,
    ImagenVideo: imagenVideo,
    Horario: this.lugarSeleccionado.horario || '',
    IdTipoLugares: { Id: this.lugarSeleccionado.idTipoLugar || 1 }
  };

  console.log('Enviando al backend:', dataPost);

  this.apicrudService.postData('lugares', dataPost).subscribe({
    next: (res) => {
      this.mostrarMensaje('Lugar enviado correctamente.', 'exito');
    },
    error: (err) => {
      console.error(err);
      this.mostrarMensaje('Error al enviar el lugar.', 'error');
    }
  });
}

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
      console.log('Imagen seleccionada:', file);
    }
  }

 guardarLugar() {
    this.lugares.push({
      ...(this.nuevoLugar as Lugar),
      confirmado: false,
      detalles: [],
       imagenes: this.nuevoLugar.imagenVideo ? [this.nuevoLugar.imagenVideo] : [], // <-- si es imagen URL
    });
    console.log('variable nuevo lugar', this.nuevoLugar)
    this.categoriaSeleccionada = '';
    this.nuevoLugar = {};
  }
nuevaImagenFondo: string = '';
nuevasImagenesTexto: string = ''; // texto con múltiples URLs separadas por coma

guardarImagenFondo() {
  if (this.nuevaImagenFondo.trim()) {
    this.detalle.imagenFondo = this.nuevaImagenFondo.trim();
    this.nuevaImagenFondo = '';
  }
}


guardarImagenesAdicionales() {
  if (this.nuevasImagenesTexto.trim()) {
    const urls = this.nuevasImagenesTexto.split(',').map(url => url.trim()).filter(url => url);
    this.detalle.imagenes.push(...urls);
    this.nuevasImagenesTexto = '';
  }
}

  mostrarMensaje(mensaje: string, tipo: 'exito' | 'error') {
    // Reemplaza esto con Snackbar o modal si prefieres
    alert(`${tipo.toUpperCase()}: ${mensaje}`);
  }

 onLugarChange() {

  console.log('Lugares por categoría:', this.lugaresPorCategoria[this.categoriaSeleccionada]);


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

    // ← Aquí insertas las asignaciones para precargar en inputs
    this.nuevaImagenFondo = this.detalle.imagenFondo || '';
    this.nuevasImagenesTexto = this.detalle.imagenes?.join(', ') || '';

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

  this.lugarSeleccionado.titulo = this.detalle.titulo || '';
  this.lugarSeleccionado.texto = this.detalle.texto || '';
  this.lugarSeleccionado.subtitulos = this.detalle.subtitulos || [];
  this.lugarSeleccionado.imagenFondo = this.detalle.imagenFondo || '';
  this.lugarSeleccionado.imagenes = this.detalle.imagenes || [];

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