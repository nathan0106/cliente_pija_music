import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

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
  copla_informacion={
    infirmacion1:'La copla, con sus versos octosílabos y hexasílabos entrelazados en melodías cautivadoras, ha jugado un papel fundamental en la música y la cultura llanera desde sus inicios. Su historia se remonta a la época colonial, cuando llegó a los Llanos de la mano de los conquistadores españoles.',
    titulo1:'Orígenes y evolución:',
    informacion2:'*Raíces españolas: La copla llanera heredó de la copla popular española su estructura métrica, basada en versos octosílabos y hexasílabos, agrupados en estrofas de cuatro versos (cuartetos).*Adaptación a la cultura llanera: Tras su llegada a los Llanos, la copla se adaptó al contexto sociocultural de la región, incorporando temáticas relacionadas con la vida cotidiana de los llaneros, su trabajo en el campo, la ganadería, la naturaleza, el amor y el desamor.*Influencias africanas: La copla llanera también se enriqueció con el aporte de las músicas africanas traídas por los esclavos, especialmente en lo que respecta al ritmo y la percusión. Los tambores y las maracas se convirtieron en instrumentos esenciales para acompañar las coplas, imprimiéndoles un sabor único y contagioso.*Variantes regionales: A lo largo de su historia, la copla llanera ha desarrollado diversas variantes regionales, cada una con sus propias características distintivas en cuanto a melodías, letras e interpretación. Desde el Casanare colombiano hasta el estado Apure en Venezuela, la copla ha tomado matices propios, reflejando la diversidad cultural de la región.',
    titulo2:'Intervención en la música llanera:',
    informacion3:'*Joropo: La copla se convirtió en un elemento fundamental del joropo, el baile emblemático de los Llanos. En el joropo, la copla se convierte en el alma que anima la fiesta, narrando historias y contagiando alegría a los presentes.*Instrumentación: La copla llanera se acompaña tradicionalmente con instrumentos como el cuatro, la bandola, las maracas y el arpa. El cuatro y la bandola proporcionan la melodía, mientras que las maracas y el arpa marcan el ritmo.*Improvisación: La copla llanera se caracteriza por su fuerte componente de improvisación. Los copleros, como se les conoce a los compositores e intérpretes de coplas, son capaces de crear versos en el momento, utilizando su ingenio y creatividad para expresar sus emociones y pensamientos.',
  }

  
  secciones: Record<SeccionID, { titulo1: string; contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;coplero1:string;biogracia1:string;imagen1:string;contapunteo2:string;biografia2:string;imagen2:string;contapunteo3:string;biografia3:string;imagen3:string;contapunteo4:string;biografia4:string;imagen4:string;}> = {
  coplas:{
    titulo1:'Coplas a la llanura:',
    contenido2:'En mi tierra Venezuela todo es risa y alegría,la naturaleza es bella y la gente muy amigable.Los paisajes son divinos y el sol siempre está brillando, en mi tierra Venezuela se vive feliz cantando.En el llano soy feliz bajo el sol y la lluvia,paseando entre las sabanas y escuchando la algarabía.Los caballos y las mulas son mis fieles compañeros,y al son de las maracas bailo con mucho esmero.',
    titulo2:'Copla al canto llanero:',
    contenido3:'El canto del arpa llanera es como un río sonoro,que corre por la llanura y va desgranando un tesoro.',
    titulo3:'El cuatro y el arpa:',
    contenido4:'El arpa y el cuatro grandes amigos,“tu vas primero,te sigo primo”.Se complementan,nunca nos faltan,en el orinoco,en la llanura.Un buen joropo,que zapatea.El cuatro y el arpa,que lindo suenan.Heova C.',
    imagen1:'',contapunteo2:'',imagen2:'',coplero1:'',biogracia1:'',biografia2:'',contapunteo3:'',biografia3:'',contapunteo4:'',biografia4:'',imagen3:'',imagen4:'',
  },

  copleros:{coplero1:'miguel malpica',
    biogracia1:' es un reconocido coplero llanero colombiano, originario de El Yopal, Casanare. Su talento en el arte del contrapunteo lo ha llevado a destacarse en diversos festivales y encuentros de música llanera, donde ha demostrado su habilidad para improvisar versos con destreza y pasión.',
    imagen1:'migel.jpg',
    contapunteo2:'Vanesa esteban',
    biografia2:'Vanessa Esteban, conocida como "La Reina del Contrapunteo", es una destacada coplera llanera colombiana nacida en Maní, Casanare. Desde temprana edad, mostró una pasión innata por la música llanera, influenciada por su entorno familiar y cultural.Su talento y dedicación la llevaron a convertirse en la primera mujer en ganar la modalidad de copleros (contrapunteo) en el Torneo Internacional del Joropo de Villavicencio, rompiendo barreras de género en un ámbito tradicionalmente dominado por hombres.',
    imagen2:'VanessaEsteban.jpeg',titulo1:'',titulo2:'',contenido2:'',titulo3:'',contenido3:'',contenido4:'',
    contapunteo3:'Pio Abril',
    biografia3:'Pío Abril es un destacado coplero, músico y compositor colombiano, nacido en 1992 en el municipio de Paz de Ariporo, Casanare. Se crio en las riberas del río Ariporo, en el corregimiento de La Chapa, municipio de Hato Corozal, donde desde temprana edad se impregnó de las tradiciones y costumbres del llano colombiano.',
    imagen3:'pioablircantante.jpeg',
    contapunteo4:'Yostimar Prada',
    biografia4:'Yostimar Prada, conocido como "El Coplero Guameño", nació en la vereda Las Guamas del municipio de Paz de Ariporo, Casanare. Desde su infancia, fue un eterno enamorado del folclor llanero, improvisando coplas mientras realizaba labores en el campo.',
    imagen4:'YostimarPrad.jpeg',
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