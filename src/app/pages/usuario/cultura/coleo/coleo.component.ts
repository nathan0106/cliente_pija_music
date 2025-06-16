import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../../../services/api.service';

type SeccionID = 'Coleaadores' | 'manga_de_coleo' | 'caballos';

@Component({
  selector: 'app-coleo',
  imports: [
    CommonModule
  ],
  templateUrl: './coleo.component.html',
  styleUrl: './coleo.component.css'
})


export class ColeoComponent {
constructor(private apiservice:ApiService,private router: Router){}
  coleo_informacion={
    titulo:'',
    informacion:'',
    titulo1:'',
    informacion1:'',
    titulo2:'',
    informacion2:'',
    titulo3:'',
    informacion3:'',
  }

  secciones: Record<SeccionID, { titulo1: string; contenido1: string ;contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;titulo4:string;contenido5:string;titulo5:string;contenido6:string;imagen1:string;imagen2:string;contenido7:string;titulo6:string;contenido8:string;titulo7:string;contenido9:string;titulo8:string;contenido10:string;titulo9:string;contenido12:string;titulo10:string;contenido13:string;titulo:string;imagen3:string;imagen4:string;imagen5:string;imagen6:string;imagen7:string;imagen8:string;imgen9:string}> = {
    Coleaadores: { 
      titulo1: '', 
      contenido1: '',
      titulo2:'',
      contenido2:'',
      titulo3:'',
      contenido3:'',
      titulo:'',
      contenido4:'',
      imagen1:'',titulo5:'',contenido6:'',titulo6:'',contenido7:'',titulo7:'',contenido8:'',titulo8:'',contenido9:'',titulo9:'',contenido10:'',titulo10:'',contenido5:'',titulo4:'',contenido12:'',contenido13:'',imagen2:'',imagen3:'',imagen4:'',imagen5:'',imagen6:'',imagen7:'',imagen8:'',imgen9:'',},
    manga_de_coleo: { 
      imagen2:'',
      titulo4:'',
      contenido5:'',
      imagen3:'',
      titulo5:''
      ,contenido6:''
      ,imagen4:'',titulo:'',contenido1:'',titulo1:'',contenido2:'',titulo2:'',contenido3:'',titulo3:'',contenido4:'',titulo9:'',contenido7:'',titulo6:'',contenido9:'',titulo8:'',contenido8:'',titulo7:'',contenido10:'',titulo10:'',imagen1:'',imagen5:'',imagen6:'',imagen7:'',imagen8:'',contenido12:'',contenido13:'',imgen9:'',},
    caballos: { titulo:'',
       contenido7: ''
       ,titulo6:''
       ,contenido8:'',
       imagen5:'' ,
       titulo7:'',
       contenido9:'',
       imagen6:'',
       titulo8:'',
       contenido10:'',
       imagen7:'',
       titulo9:'',
       contenido12:'',
       imagen8:'',
       titulo10:''
       ,contenido13:'',
       imgen9:'',
       titulo1:'',contenido1:'',titulo2:'',contenido2:'',titulo3:'',contenido3:'',titulo4:'',contenido4:'',titulo5:'',contenido5:'',contenido6:'',imagen1:'',imagen2:'',imagen3:'',imagen4:''},
  };

  seccionActual: SeccionID | null = null;

  cards = [
    {
      imagen: 'assets/coleo.jpg',
      titulo: 'Coleo',
      descripcion: 'Recuerda la esencia de la música llanera',
      ruta: '/coleo'
    },
    {
      imagen: 'assets/mangas.jpg',
      titulo: 'Mangas/plazas de coleo',
      descripcion: 'Conoce la diversidad del llano',
      ruta: '/mangas'
    },
    {
      imagen: 'assets/coleadores.jpg',
      titulo: 'Coleadores',
      descripcion: 'Lugares más visitados',
      ruta: '/coleadores'
    },
    {
      imagen: 'assets/razas.jpg',
      titulo: 'Razas de caballos.',
      descripcion: 'Expresión artística',
      ruta: '/razas'
    }
  ];
  
 
  
  navigate(ruta: string) {
    this.router.navigate([ruta]);
  }

  mostrarSeccion(nombre: SeccionID) {
    this.seccionActual = nombre;
  }
cerrarDetalle(){
  this.seccionActual=null;
}
ngOnInit(){
  console.log('[ngOnInit]iniciando')

  this.apiservice.getData('Tipo_Cultura?query=Nombre:coleo').subscribe(
    (coleo)=>{
      console.log('[GET Tipo_cultura]respuest:',coleo);
      const infoEnString = coleo['Data'][0]['Informacion'];
      const infoParseada =JSON.parse(infoEnString);
      this.coleo_informacion.titulo = infoParseada.detalles[0]?.subtitulo ||'';
      this.coleo_informacion.informacion = infoParseada.detalles[0]?.descripcion||'';
      this.coleo_informacion.titulo1 = infoParseada.detalles [1]?.subtitulo||'';
      this.coleo_informacion.informacion1 =infoParseada.detalles[1]?.descripcion||'';
      this.coleo_informacion.titulo2 = infoParseada.detalles[1]?.subtitulo||'';
      this.coleo_informacion.informacion2 = infoParseada.detalles[1].descripcion||'';
      this.coleo_informacion.titulo3 = infoParseada.detalles[1].subtitulo||'';
      this.coleo_informacion.informacion3 = infoParseada.detalles[1].descripcion||'';
    },
  (error)=>{
    console.error('[GET coleo]Error',error)
    alert('error al llegar el get de coleo')
  }
  );
  this.apiservice.getData('Cultura?query=IdTipoCultura.Id:34').subscribe(
    (infoCopla)=>{
      console.log('[Get Cultura responde]',infoCopla);
      const data =infoCopla.Data;
      const informaciones =(data as any[]).map(item =>item.Informacion);

      const informacionCOLEO = informaciones
      .map(info =>{
        try{
          return JSON.parse(info);
        }catch(e){
          console.error('Error al pasar informacion',info,e);
          return null;
        }
      })
      .filter(info => info!== null);
    if(informacionCOLEO.length >=3){
      console.log("datos general",informacionCOLEO)
      const Coleadores =informacionCOLEO[2];
      const Manda_de_Coleo =informacionCOLEO[0];
      const CABALLOS = informacionCOLEO[1];

      console.log("Esto es titulo 1 coleo:",Coleadores.secciones[0]?.subtitulo)
      this.secciones.Coleaadores.titulo1 = Coleadores.secciones[0]?.subtitulo||'';
      console.log("Esto es contenido 1 coleo:",Coleadores.secciones[0]?.descripcion)
      this.secciones.Coleaadores.contenido1 = Coleadores.secciones[0]?.descripcion||'';
      this.secciones.Coleaadores.titulo2 = Coleadores.secciones[1]?.subtitulo||'';
      this.secciones.Coleaadores.contenido2 = Coleadores.secciones[1]?.descripcion||'';
      this.secciones.Coleaadores.titulo3 = Coleadores.secciones[2]?.subtitulo||'';
      this.secciones.Coleaadores.contenido3 = Coleadores.secciones[2]?.descripcion||'';
      this.secciones.Coleaadores.titulo = Coleadores.secciones[3]?.subtitulo||'';
      this.secciones.Coleaadores.contenido4 =Coleadores.secciones[3]?.descripcion||'';
      this.secciones.Coleaadores.imagen1 =Coleadores.secciones[4]?.imagen||'';

      this.secciones.manga_de_coleo.imagen2=Manda_de_Coleo.secciones[1].imagen||'';
      console.log("Esto es titulo 4 mnga:",Manda_de_Coleo.secciones)
      this.secciones.manga_de_coleo.titulo4=Manda_de_Coleo.secciones[1].subtitulo||'';
      this.secciones.manga_de_coleo.contenido5=Manda_de_Coleo.secciones[2].descripcion||'';
      this.secciones.manga_de_coleo.imagen3=Manda_de_Coleo.secciones[2].imagen||'';
      this.secciones.manga_de_coleo.titulo5=Manda_de_Coleo.secciones[3].subtitulo||'';
      this.secciones.manga_de_coleo.contenido6=Manda_de_Coleo.secciones[3].descripcion||'';
      this.secciones.manga_de_coleo.imagen4=Manda_de_Coleo.secciones[4].imagen||'';

      this.secciones.caballos.titulo1 = CABALLOS.secciones[5].subtitulo
      this.secciones.caballos.contenido7 = CABALLOS.secciones[5].descripcion
      this.secciones.caballos.titulo6 = CABALLOS.secciones[6].subtitulo
      this.secciones.caballos.contenido8 = CABALLOS.secciones[6].descripcion
      this.secciones.caballos.imagen5 =CABALLOS.secciones[7].imagen
      this.secciones.caballos.titulo7 = CABALLOS.secciones[7].subtitulo
      this.secciones.caballos.contenido9 = CABALLOS.secciones[8].descripcion
      this.secciones.caballos.imagen6 = CABALLOS.secciones[8].imagen
      this.secciones.caballos.titulo8 = CABALLOS.secciones[9].subtitulo
      this.secciones.caballos.contenido10 = CABALLOS.secciones[9].descripcion
      this.secciones.caballos.imagen7 = CABALLOS.secciones[10].imagen
      this.secciones.caballos.titulo9 = CABALLOS.secciones[10].subtitulo
      this.secciones.caballos.contenido12 = CABALLOS.secciones[11].descripcion
      this.secciones.caballos.imagen8 = CABALLOS.secciones[11].imagen
      this.secciones.caballos.titulo10 = CABALLOS.secciones[12].subtitulo
      this.secciones.caballos.contenido13 = CABALLOS.secciones[12].descripcion
      this.secciones.caballos.imgen9 = CABALLOS.secciones[13].imagen
      
    }  
    },
    (Error)=> {
      console.error('[GET Coleadores]Error:',Error);
      alert('error al llegar el get de coleadores');
    }
  );
}
  
}
