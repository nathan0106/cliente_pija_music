import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ApiService } from '../../../../services/api.service';

type SeccionID = 'cotiza_espetatulo'|'cotiza_criollo'
@Component({
  selector: 'app-cotiza',
  imports: [CommonModule,
    RouterModule,
    MatButtonModule,
    MatSidenavModule,
  ],
  templateUrl: './cotiza.component.html',
  styleUrl: './cotiza.component.css'
})
export class CotizaComponent {
constructor(private apiservice:ApiService){}

  cotiza_informacion={
    titulo1:'',
    informacion1:'',
    titulo2:'',
    informacion2:''

  }

  secciones: Record<SeccionID,{titulo1:string;contenido:string;imagen1:string;uso:string;titulo2:string;}> = {
    cotiza_criollo:{
      titulo1:'',
      contenido:'',
      titulo2:'',
      uso:'',
      imagen1:'',
    },
    cotiza_espetatulo:{
      titulo1:'',
      contenido:'',
      titulo2:'',
      uso:'',
      imagen1:''
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
  // Primer GET (datos generales)
  console.log('[ngOnInit] Iniciado');
  
  this.apiservice.getData('Tipo_Cultura?query=Nombre:cotiza').subscribe(
    (repuesta) =>{
       console.log('[GET Tipo_Cultura] respuesta:', repuesta);
      const infoEnString = repuesta['Data'][0]['Informacion'];
      const infoParseada = JSON.parse(infoEnString);
      this.cotiza_informacion.titulo1 = infoParseada.detalles[0].subtitulo;
      this.cotiza_informacion.informacion1 = infoParseada.detalles[0].descripcion;
      this.cotiza_informacion.titulo2 = infoParseada.detalles[1].subtitulo;
      this.cotiza_informacion.informacion2 = infoParseada.detalles[1].descripcion;
    },
    (error) => {
      console.error('[GET Tipo_Cultura] Error:', error);
      alert('error al llegar el primer GET');
    }
  );

  // Segundo GET (detalle de cotiza criollo y espectáculo)
  this.apiservice.getData('Cultura?query=IdTipoCultura.Id:36').subscribe(
    (respuesta) => {
      console.log('[GET Cultura] respuesta:', respuesta);
      const data = respuesta.Data;
      const informaciones = (data as any[]).map(item => item.Informacion);

      const informacionesParseadas = informaciones
        .map(info => {
          try {
            return JSON.parse(info);
          } catch (e) {
            console.error('Error al parsear Información:', info, e);
            return null;
          }
        })
        .filter(info => info !== null);

      if (informacionesParseadas.length >= 2) {
        const criollo = informacionesParseadas[0];
        const espectaculo = informacionesParseadas[1];

        // Asignar datos al objeto cotiza_criollo
        this.secciones.cotiza_criollo.titulo1 = criollo.secciones[0]?.subtitulo || '';
        this.secciones.cotiza_criollo.contenido = criollo.secciones[0]?.descripcion || '';
        this.secciones.cotiza_criollo.titulo2 = criollo.secciones[1]?.subtitulo || '';
        this.secciones.cotiza_criollo.uso = criollo.secciones[1]?.descripcion || '';
        this.secciones.cotiza_criollo.imagen1 = criollo.secciones[1]?.imagen || '';

        // Asignar datos al objeto cotiza_espetatulo
        this.secciones.cotiza_espetatulo.titulo1 = espectaculo.secciones[0]?.subtitulo || '';
        this.secciones.cotiza_espetatulo.contenido = espectaculo.secciones[0]?.descripcion || '';
      }
    },
    (error) => {
          console.error('[GET Cultura] Error:', error);

      alert('error al llegar el segundo GET');
    }
  );
}

}