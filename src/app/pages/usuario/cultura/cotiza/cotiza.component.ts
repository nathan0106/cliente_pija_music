import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

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

  cotiza_informacion={
    titulo1:'Historia',
    informacion1:'Las cotizas llaneras son un calzado típico de la región de los Llanos Orientales en Colombia y Venezuela. Se caracterizan por su elaboración artesanal en cuero, su suela plana y su diseño sencillo y cómodo. Son un elemento esencial del traje llanero y un símbolo de la cultura de la región.',
    titulo2:'Caracteristicas',
    informacion2:'Materiales: Elaboradas principalmente en cuero de ganado vacuno, aunque también se pueden encontrar en otros materiales como caucho o suela sintética.Diseño: Suela plana y resistente, con correas de cuero que se ajustan al pie. Algunas cotizas tienen diseños más elaborados con adornos y trenzados Comodidad: Su flexibilidad y adaptación al pie las hacen un calzado cómodo para uso diario, especialmente en climas cálidos y terrenos secos.Tradición: Las cotizas llaneras forman parte del traje típico de la región y se utilizan en fiestas, eventos folclóricos y celebraciones especiales.'

  }

  secciones: Record<SeccionID,{titulo1:string;contenido:string;imagen1:string;uso:string;titulo2:string;}> = {
    cotiza_criollo:{
      titulo1:'cotiza llanera',
      contenido:'es el calzado tradicional utilizado en la danza del joropo, símbolo cultural de los Llanos colombo-venezolanos. Este tipo de calzado, también conocido como alpargata, ha evolucionado a lo largo del tiempo, adaptándose a las necesidades y expresiones artísticas de la región.',
      titulo2:'Uso en la Danza',
      uso:'Tanto hombres como mujeres utilizan cotizas durante las presentaciones de joropo. La suela de caucho proporciona el sonido característico del zapateo, esencial en esta danza. ',
      imagen1:'cotizal_llanera.jpg',
    },
    cotiza_espetatulo:{
      titulo1:'cotiza para danza espetaculo',
      contenido:' es una versión estilizada del calzado tradicional llanero, diseñada específicamente para presentaciones escénicas de alto nivel, como concursos, festivales y shows de danza folclórica, especialmente el joropo estilizado.',
      titulo2:'Uso en la Danza',
      uso:'Las cotizas de espectáculo suelen presentar adornos como bordados, lentejuelas o pinturas a mano, especialmente en las versiones femeninas. Los colores pueden variar para combinar con el vestuario del grupo de danza. este caso las cotizas que utiliza las damas cambiar el color ya que tiene qu ecombianar con el vestido que este utilizando ',
      imagen1:'cotizas.PNG'
    }
  }
    seccionActual: SeccionID | null = null;
  
  mostrarSeccion(nombre: SeccionID) {
    this.seccionActual = nombre;
  }
cerrarDetalle(){
  this.seccionActual=null;
}
}
