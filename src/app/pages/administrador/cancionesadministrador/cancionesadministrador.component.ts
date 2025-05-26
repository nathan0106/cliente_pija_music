import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-cancionesadministrador',
   standalone: true,
  imports: [
    FormsModule,
    CommonModule  
  ],
  templateUrl: './cancionesadministrador.component.html',
  styleUrls: ['./cancionesadministrador.component.css']
})
export class CancionesadministradorComponent {
   constructor(private apiService: ApiService) {}
  artistas: any[]=[]; // Puedes cargar dinámicamente

  estilos: any[] = [];

  canciones: any[] = [];

  cancionNueva = {
    titulo: '',
    duracion: '',
    link: '',
    artista: '',
    album: '',
    idEstilo: '',
    fechaLanzamiento: ''
  };

  cancionjsnpost={
    TituloCancion:'',
    IdArtistas :{
      Id:0
       },
    Album:'',
    IdEstilo:{
      Id:0
    },
    Duracion:'',
    RutaArchivo:'',
    FechaLanzamiento:'',
  }


  guardarCancion() {
    this.canciones.push({ ...this.cancionNueva });
    this.cancionjsnpost={
      TituloCancion:this.cancionNueva.titulo,
      IdArtistas:{
        Id: Number(this.cancionNueva.artista)
      },
      Album:this.cancionNueva.album,
      IdEstilo: {
        Id: Number(this.cancionNueva.idEstilo)
      },
      Duracion:this.cancionNueva.duracion,
      RutaArchivo:this.cancionNueva.link,
      FechaLanzamiento:this.cancionNueva.fechaLanzamiento
    }

     let cancionNueva_json = JSON.stringify(this.cancionjsnpost);

     console.log('json',cancionNueva_json)

    this.apiService.postData('Canciones', cancionNueva_json).subscribe(
  (respuesta) => {
    console.log('cancion creado', respuesta);
    alert('cancion musical creado exitosamente');
  },
  (error) => {
  console.error('Error al crear la cancion ', error);
  alert('Error al crear la cancion');
 }
);

    this.cancionNueva = {
      titulo: '',
      duracion: '',
      link: '',
      artista: '',
      album: '',
      idEstilo: '',
      fechaLanzamiento: ''
    };
  }

  ngOnInit(): void {
    // Este código se ejecuta después de que Angular ha inicializado el componente
    console.log('Componente inicializado');

    this.apiService.getData('Artista?limit=0').subscribe(
    (respuesta) => {
      console.log('Artistas cargados', respuesta);
      this.artistas= respuesta["Data"]
    },
    (error) => {
    console.error('Error al consultar los artistas', error);
    alert('Error al consultar Aristas');
  }
  );

    
  this.apiService.getData('Estilo_Musical?limit=0').subscribe(
  (respuesta) => {
  console.log('Estilos cargados', respuesta);
  this.estilos = respuesta["Data"];
  },
  (error) => {
  console.error('Error al consultar estilos musicales', error);
  alert('Error al consultar estilos musicales');
  }
);
}

  }

