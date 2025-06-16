import { Component, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HttpClient } from '@angular/common/http';

type SeccionID ='copleros'| 'coplas' ;

@Component({
  selector: 'app-coplas',
  imports: [CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './coplas.component.html',
  styleUrls: ['./coplas.component.css']
})
export class CoplasComponent {
  constructor(private apiservice:ApiService,private http: HttpClient ){}
  
  copla_informacion={
    titulo:'i',
    infirmacion1:'gyg',
    titulo1:'',
    informacion2:'',
    titulo2:'',
    informacion3:'',
  }

  
  secciones: Record<SeccionID, { titulo1: string; contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;coplero1:string;biogracia1:string;imagen1:string;contapunteo2:string;biografia2:string;imagen2:string;contapunteo3:string;biografia3:string;imagen3:string;contapunteo4:string;biografia4:string;imagen4:string;}> = {
  coplas:{
    titulo1:'',
    contenido2:'',
    titulo2:'',
    contenido3:'',
    titulo3:'',
    contenido4:'',
    imagen1:'',contapunteo2:'',imagen2:'',coplero1:'',biogracia1:'',biografia2:'',contapunteo3:'',biografia3:'',contapunteo4:'',biografia4:'',imagen3:'',imagen4:'',
  },

  copleros:{
    coplero1:'',
    biogracia1:'',
    imagen1:'',
    contapunteo2:'',
    biografia2:'',
    imagen2:'',titulo1:'',titulo2:'',contenido2:'',titulo3:'',contenido3:'',contenido4:'',
    contapunteo3:'',
    biografia3:'',
    imagen3:'',
    contapunteo4:'',
    biografia4:'',
    imagen4:'',
  }  
    
  }
  seccionActual: SeccionID | null = null;
  
  mostrarSeccion(nombre: SeccionID) {
    this.seccionActual = nombre;
  }
cerrarDetalle(){
  this.seccionActual=null;
}
ngOnInit() {
  console.log('[ngOnInit] Iniciado');

  // GET 1: Tipo_Cultura
  this.apiservice.getData('Tipo_Cultura?query=Nombre:coplas').subscribe(
    (respuesta) => {
      const infoEnString = respuesta['Data'][0]?.Informacion;
      const coplasinfo= respuesta['0']

if (typeof infoEnString === 'string') {

  try {
    const infoParseada = JSON.parse(infoEnString as string);  // fuerza que es un string
    const detalles = infoParseada.detalles;
    this.copla_informacion.titulo = detalles[0]?.subtitulo || '';
    this.copla_informacion.infirmacion1 = detalles[0]?.descripcion || '';
    this.copla_informacion.titulo1 = detalles[1]?.subtitulo || '';
    this.copla_informacion.informacion2 = detalles[1]?.descripcion || '';
    this.copla_informacion.titulo2 = detalles[2]?.subtitulo || '';
    this.copla_informacion.informacion3 = detalles[2]?.descripcion || '';
    
    console.log('[GET tipo_cultura copla] Respuesta:', respuesta);

  } catch (e) {
    console.error('[GET tipo_cultura copla] Error al parsear JSON:', e);
  }
} else {
  console.warn('[GET tipo_cultura copla] Informacion no es una cadena:', infoEnString);
}

    },
    (error) => {
      console.error('[GET tipo_cultura copla] error:', error);
      alert('Error al llegar el primer GET');
    }
  );

  // GET 2: Coplas
  this.apiservice.getData('Coplas').subscribe(
  (copla) => {
    const data = copla['Data'];

    // Validar que hay al menos un elemento
    if (data && data.length > 0) {
      // Rellenamos los datos de las coplas en secciones
      this.secciones.coplas.titulo1 = data[0]?.NombreCopla || '';
      this.secciones.coplas.contenido2 = data[0]?.DescripcionCoplas || '';

      this.secciones.coplas.titulo2 = data[1]?.NombreCopla || '';
      this.secciones.coplas.contenido3 = data[1]?.DescripcionCoplas || '';

      this.secciones.coplas.titulo3 = data[2]?.NombreCopla || '';
      this.secciones.coplas.contenido4 = data[2]?.DescripcionCoplas || '';

    }
  },
  (error) => {
    console.error('[GET coplas] error:', error);
    alert('Error al llegar al segundo GET');
  }
);

  // ✅ GET 3: Autor
  this.apiservice.getData('Autor_Coplas').subscribe(
    (copleros) => {
      const data = copleros.Data;
      if (data.length >= 4) {
        this.secciones.copleros.coplero1 = data[0].NombreAutor;
        this.secciones.copleros.biogracia1 = data[0].BiografiaAutor;
        this.secciones.copleros.imagen1 = data[0].ImagenVideo;

        this.secciones.copleros.contapunteo2 = data[1].NombreAutor;
        this.secciones.copleros.biografia2 = data[1].BiografiaAutor;
        this.secciones.copleros.imagen2 = data[1].ImagenVideo;

        this.secciones.copleros.contapunteo3 = data[2].NombreAutor;
        this.secciones.copleros.biografia3 = data[2].BiografiaAutor;
        this.secciones.copleros.imagen3 = data[2].ImagenVideo;

        this.secciones.copleros.contapunteo4 = data[3].NombreAutor;
        this.secciones.copleros.biografia4 = data[3].BiografiaAutor;
        this.secciones.copleros.imagen4 = data[3].ImagenVideo;
      }
    },
    (error) => {
      console.error('[GET Autor] error:', error);
      alert('Error al llegar al tercer GET de autores');
    }
  );
}

}