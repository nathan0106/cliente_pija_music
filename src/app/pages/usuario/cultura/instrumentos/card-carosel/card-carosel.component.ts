import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-card-carosel',
  imports: [MatCardModule,
    CommonModule,
  
    MatButtonModule
  ],
  templateUrl: './card-carosel.component.html',
  styleUrl: './card-carosel.component.css'
})
export class CardCaroselComponent implements  OnInit {
  constructor(private router:Router,private route:ActivatedRoute){}


  currenIndex = 3;
  instrumento:String='';

  sectionTitle = 'Sección destacada';
  sectionDescription = 'Explora los sitios turisticos de yopal';
  selectedInfo:{title: string, description: string, origen:string ,llagada:string,title1:string,title2:string }|null=null  
  informacion_instrumentos={
    instrumentos:'La música llanera, con su rica historia y vibrante sonido, se caracteriza por el uso de una variedad de instrumentos que han ido evolucionando y adaptándose a lo largo del tiempo. Cada instrumento aporta su propia voz única a la música, creando una textura sonora  compleja y cautivadora que refleja la identidad cultural de la región llanera de Colombia y Venezuela. Los instrumentos utilizados en la música llanera han evolucionado a lo largo del tiempo, adaptándose a las influencias culturales y a las nuevas tecnologías. Los instrumentos tradicionales como el arpa, el cuatro y las maracas se han mantenido como elementos centrales del género, mientras que otros instrumentos como el bajo y la guitarra se han incorporado más recientemente.La música llanera no sería la misma sin sus instrumentos. Cada instrumento aporta su propia voz única, creando una rica tapestry sonora que refleja la historia, la cultura y la identidad de la región llanera. Los instrumentos llaneros han evolucionado a lo largo del tiempo, adaptándose a nuevas influencias y tecnologías, pero siguen siendo elementos esenciales en la expresión musical de la región. ',

    
  }
  cards = [
    {
      image: 'cuatro (2).webp',
      title_button:'Cuatro',
      detailTitle:'Historia del cuatro',
      detailDescription:'El cuatro, con su sonido cálido y su versatilidad, se ha convertido en uno de los instrumentos emblemáticos de la música llanera, marcando el ritmo y la melodía de este género musical arraigado en las llanuras colombianas y venezolanas. Su historia, llena de adaptaciones y fusiones, refleja la evolución cultural y musical de la región.',
      title1:'Orígenes',
      origen:'Las raíces del cuatro se remontan a la guitarra renacentista española, instrumento que llegó a América durante la época colonial. En las manos de los pobladores locales, principalmente indígenas y mestizos, la guitarra sufrió transformaciones, dando lugar a instrumentos como el tiple y el cuatro.',
      title2:'Llegada a los Llanos',
      llagada:'El cuatro se introdujo en los Llanos colombianos y venezolanos a finales del siglo XVIII y principios del XIX, adaptándose rápidamente a las tradiciones musicales de la región. Su tamaño más pequeño y su afinación particular lo convirtieron en un instrumento ideal para acompañar las melodías y ritmos llanera.',

    },
    {
      
      image: 'maracas (2).jpg',
      title_button:'Maracas',
      detailTitle:'Historia de las maracas',
      detailDescription:'Las maracas, esos instrumentos membranófonos de origen ancestral, han acompañado a las culturas del mundo desde tiempos inmemoriales, y en la música llanera, su presencia ha sido fundamental para marcar el ritmo y el sabor de este género musical tan arraigado en las llanuras colombianas y venezolanas.',
      title1:'Orígenes',
      origen:'Las maracas, con su simpleza y versatilidad, han estado presentes en diversas civilizaciones antiguas. Se han encontrado vestigios de estos instrumentos en culturas precolombinas como la maya, la azteca e incluso en el antiguo Egipto. Su fabricación variaba según la región, utilizando frutos secos como el totumo o el güiro, calabazas, cráneos de animales o incluso conchas marinas.',
      title2:'Llegada a los Llanos',
      llagada:'La introducción de las maracas en los Llanos se remonta a la época colonial, cuando los españoles trajeron consigo su tradición musical y la fusionaron con los elementos culturales locales. Los indígenas y mestizos de la región adoptaron rápidamente las maracas, incorporándolas a sus propios ritmos y melodías.',


    },
    {
      
      image: 'mandolina1.,.jpg',
      title_button:'Mandolina',
      detailTitle:'Historia de la mandolina',
      detailDescription:'Si bien la mandolina ha influido en el desarrollo de la bandola, un instrumento de cuerda similar comúnmente utilizado en la música llanera, no se considera un instrumento principal en el género. La historia de la mandolina en la región de los llanos está entrelazada con su papel en la evolución de la bandola, que tiene su propia historia y contribuciones únicas a la música llanera.',
      title1:'Orígenes',
      origen:'Las raíces de la mandolina se remontan a Oriente Medio y Asia Central, donde instrumentos similares existían ya en el siglo VIII. Ganó popularidad en Europa durante los siglos XVI y XVII, particularmente en Italia, donde se convirtió en un instrumento prominente en la música clásica y folclórica.',
      title2:'Llegada a los Llanos',
      llagada:'La llegada de la mandolina a la región de los llanos de Colombia y Venezuela está ligada a la colonización española, ya que fue traída por colonos europeos en los siglos XVI y XVII. Junto con otros instrumentos como la guitarra, la mandolina llegó a manos de músicos locales, incluidas poblaciones indígenas y mestizas',

    },
    {
      image: 'bajo-.1.jpg',
      title_button:'bajo',
      detailTitle:'bajo',
      detailDescription:'El bajo eléctrico, con su sonido profundo y resonante y su base rítmica, se ha convertido en un instrumento destacado en diversos géneros musicales del mundo, incluida la música llanera. Si bien su introducción a la música llanera es relativamente reciente en comparación con otros instrumentos tradicionales, el bajo se ha establecido como parte integral del sonido dinámico y en constante evolución del género.',
      title1:'Orígenes',
      origen:'Las raíces del bajo eléctrico se remontan al siglo XV con el desarrollo del violone, un instrumento de cuerda grande y con arco. Durante la década de 1930, el bajo eléctrico surgió como un instrumento distinto, ganando popularidad en la música jazz y blues. Su sonido amplificado y su versatilidad lo convirtieron en una adición atractiva a diversos estilos musicales.',
      title2:'Llegada a los Llanos',
      llagada:'La introducción del bajo eléctrico a la música llanera se considera generalmente que ocurrió a mediados del siglo XX, coincidiendo con la creciente popularidad y modernización del género. A medida que la música llanera incorporaba elementos de otros géneros, como la salsa y el rock and roll, el bajo eléctrico encontró su lugar para proporcionar una base rítmica sólida y mejorar el sonido general.',
    },
    {
      
      image: 'bandola2.webp',
      title_button:'bandola',
      detailTitle:'bandola',
      detailDescription:'La bandola, con su sonido dulce y armonioso, se ha convertido en uno de los instrumentos distintivos de la música llanera, aportando riqueza y complejidad a las melodías de este género musical arraigado en las llanuras colombianas y venezolanas. Su historia, marcada por viajes y adaptaciones, refleja la evolución cultural y musical de la región.',
      title1:'Orígenes',
      origen:'Las raíces de la bandola se remontan a la mandolina europea, instrumento que llegó a América durante la época colonial. En las manos de los pobladores locales, principalmente indígenas y mestizos, la mandolina sufrió transformaciones, dando lugar a instrumentos como la bandola.',
      title2:'Llegada a los Llanos',
      llagada:'La bandola se introdujo en los Llanos colombianos y venezolanos a finales del siglo XVIII y principios del XIX, adaptándose rápidamente a las tradiciones musicales de la región. Su sonido suave y su capacidad para interpretar melodías complejas la convirtieron en un instrumento ideal para acompañar a la voz del cantante y enriquecer las armonías del joropo, el ritmo más popular de la música llanera.',
    },
    {
      
      image: 'arpa...png',
      title_button:'arpa',
      detailTitle:'Historia del arpa',
      detailDescription:'El arpa, con su sonido majestuoso y su versatilidad, se ha convertido en el instrumento rey de la música llanera, marcando el pulso y la armonía de este género musical arraigado en las llanuras colombianas y venezolanas. Su historia, llena de viajes y transformaciones,',
      title1:'Orígenes',
      origen:'Las raíces del arpa se remontan a la antigua Mesopotamia, donde se encontraron vestigios de este instrumento que datan del año 3000 a.C. A lo largo de los siglos, el arpa viajó por diversas culturas del mundo, adaptándose a diferentes tradiciones musicales.',
      title2:'Llegada a los Llanos',
      llagada:'El arpa llegó a los Llanos colombianos y venezolanos a finales del siglo XVI y principios del XVII, traída por los conquistadores españoles. En las manos de los pobladores locales, principalmente indígenas y mestizos, el arpa experimentó una profunda transformación, dando lugar al arpa llanera, un instrumento único con características propias.',
    },
    

  ]
  autoDirection: 'forward' | 'backward' = 'forward';

goNext() {
  if (this.currenIndex < this.cards.length - 1) {
    this.currenIndex++;
  }
}
goPrevious() {
  if (this.currenIndex > 0) {
    this.currenIndex--;
  }
}
getTransform() {
  return `translateX(-${this.currenIndex * 100}%)`;
}
mostrarDetalle(card:any){
 
    this.selectedInfo={
      title: card.detailTitle,
      description: card.detailDescription,
      origen: card.origen,
      llagada:card.llagada,
      title1:card.title1,
      title2:card.title2,
    }
  }
  
moverCarrusel(direccion: string): void {
  if (direccion === 'izquierda') {
    this.currenIndex = Math.max(0, this.currenIndex - this.currenIndex);
  } else if (direccion === 'derecha') {
    const maxIndex = this.cards.length - 1;
    this.currenIndex = Math.min(maxIndex, this.currenIndex + this.currenIndex);
  }
}
ngOnInit() {
  setInterval(() => {
   this.currenIndex = (this.currenIndex + 1) % this.cards.length;

  }, 2000); // cambia cada 4 segundos
}


cerrarDetalle(){
  this.selectedInfo=null;
}
retroceder() {
  // Cambia al ítem anterior inmediatamente
  if (this.currenIndex > 0) {
    this.currenIndex--;
  }
}


}




