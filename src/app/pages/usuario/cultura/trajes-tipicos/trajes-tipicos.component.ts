import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { Route } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

type SeccionID = 'trajes_tipicos' | 'zombreros_llaneros' ;

@Component({
  selector: 'app-trajes-tipicos',
  imports: [
    CommonModule
  ],
  templateUrl: './trajes-tipicos.component.html',
  styleUrl: './trajes-tipicos.component.css'
})
export class TrajesTipicosComponent {
  constructor(private apiservice:ApiService){}

  trajes_informacion={
    titulo1:'Trajes llaneros',
    informacion1:'Los trajes llaneros son vestimentas tradicionales utilizadas por los habitantes de los Llanos Orientales de Colombia y Venezuela. Están diseñados para reflejar el entorno, las costumbres y el estilo de vida del llanero, combinando funcionalidad y estética. El traje masculino incluye camisa, pantalón, sombrero y cotizas, mientras que el femenino destaca por su blusa decorada y falda amplia, típicos del baile del joropo.'
  }
  secciones: Record<SeccionID, { titulo1: string; contenido1: string ;contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;titulo4:string;contenido5:string;titulo5:string;imagen1:string;imagen2:string;imagen3:string;imagen4:string}> = {
    trajes_tipicos:{titulo1:'Historia del traje llanero',
      contenido1:'El traje llanero, con su distintiva combinación de elegancia y funcionalidad, es un símbolo cultural que encarna la esencia de la región de los Llanos Orientales de Colombia y Venezuela. Su historia se remonta a siglos atrás, reflejando la mezcla de influencias indígenas, europeas y africanas que dieron forma a la identidad llanera.',
      titulo2:'Oriegen y evolución',
      contenido2:'En sus inicios, el traje llanero estaba diseñado principalmente para el trabajo en el campo. Los materiales utilizados, como el algodón y el cuero, eran resistentes y adaptados a las condiciones climáticas de la región. Los pantalones holgados permitían una gran libertad de movimiento para la monta a caballo y el trabajo ganadero, mientras que las camisas holgadas y ventiladas proporcionaban frescura en el calor tropical.Con el paso del tiempo, el traje llanero fue evolucionando y adquiriendo un carácter más festivo. Los colores vivos y los adornos se incorporaron a las prendas, reflejando la alegría y la celebración de la cultura llanera. El sombrero, elemento fundamental del traje, se convirtió en un símbolo de identidad y orgullo para los llaneros.',
      titulo3:'Elmentos distintivos',
      contenido3:'El traje llanero para hombre se compone de varias piezas clave:Sombrero: Generalmente de fieltro o paja, adornado con cintas o trenzas.Liquiliqui: Camisa de manga larga con cuello redondo y botones, elaborada en lino o algodón.Pantalón: De corte recto y holgado, confeccionado en tela resistente como el kaki o la dril.Pañuelo: Pieza de tela colorida que se lleva al cuello o en la cabeza.Alpargatas: Calzado cómodo y fresco, ideal para el terreno llanero.El traje llanero para mujer también tiene sus características distintivas:Bata: Vestido holgado y fresco, generalmente de colores vivos y estampados florales.Falda: Pieza que se lleva debajo de la bata, elaborada en telas livianas como la seda o el algodón.Pañuelo: Similar al del hombre, se utiliza para complementar el atuendo.Alpargatas o zapatos de tacón: Dependiendo de la ocasión y el gusto personal.',
      imagen1:'trajestradicional.PNG',
      imagen2:'trajeacademico.PNG',titulo4:'',titulo5:'',contenido4:'',contenido5:'',imagen4:'',imagen3:'',},

    zombreros_llaneros:{titulo4:'Historia ',
      contenido4:'El sombrero llanero, con su amplia ala y su distintiva forma, es un elemento icónico de la cultura llanera, tanto en Colombia como en Venezuela. Su historia se remonta a siglos atrás, reflejando la adaptación de los habitantes de la región a las condiciones climáticas y las actividades propias del llano.',
      titulo5:'Orígenes y evolución',
      contenido5:'En sus inicios, el sombrero llanero era utilizado principalmente como protección contra el sol inclemente y las lluvias torrenciales que caracterizan la región. Su forma ancha y su material resistente, como el fieltro o la paja, lo convertían en una prenda indispensable para el trabajo en el campo y la vida cotidiana de los llaneros.Con el paso del tiempo, el sombrero llanero fue trascendiendo su función práctica para convertirse en un símbolo de identidad y orgullo para los habitantes de la región. Su presencia en fiestas, eventos folclóricos y celebraciones especiales lo convirtió en un elemento representativo de la cultura llanera.',
      imagen3:'sombreroTra.PNG',
      imagen4:'sombrero2.PNG',titulo1:'',contenido1:'',titulo2:'',contenido2:'',titulo3:'',contenido3:'',imagen1:'',imagen2:'',}
  }; 
   seccionActual: SeccionID | null = null;
   mostrarSeccion(nombre: SeccionID) {
    this.seccionActual = nombre;
  }
  cerrarDetalle(){
  this.seccionActual=null;
}
ngOnInit() {
  this.apiservice.getData('Tipo_Cultura?query=Nombre:trajes-tipicos').subscribe(
    (respuesta) => {
      const data = respuesta?.Data?.[0]?.informacion1;

      if (data) {
        try {
          const infoParseada = JSON.parse(data);
          this.trajes_informacion.informacion1 = infoParseada?.detalles?.[0]?.descripcion || '';
        } catch (e) {
          console.error('Error al parsear JSON de informacion1:', e);
        }
      } else {
        console.warn('No se encontró informacion1 en la respuesta');
      }
    },
    (error: any) => {
      alert('error de trajes');
      console.error(error);
    }
  );
}

}
