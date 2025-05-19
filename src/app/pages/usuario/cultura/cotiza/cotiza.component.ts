import { Component } from '@angular/core';

@Component({
  selector: 'app-cotiza',
  imports: [],
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

}
