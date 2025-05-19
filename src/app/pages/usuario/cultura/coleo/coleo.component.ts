import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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

  coleo_informacion={
    informacion:'El coleo de toros, también conocido como toros coleados, es un deporte ecuestre que se practica en Venezuela y en los llanos orientales de Colombia. Consiste en que un jinete montado a caballo intente derribar a un toro agarrándole la cola y tirándolo al suelo. El deporte es una exhibición popular y emocionante de equitación, habilidad y coraje.',
    titulo1:'Historia y orígenes',
    informacion1:'Se cree que el coleo se originó en la región de los llanos de América del Sur durante la época colonial. Se desarrolló como una forma en que los llaneros (ganaderos) capturaban y domaban toros salvajes para marcarlos y otros fines. Con el tiempo, el coleo se convirtió en un deporte competitivo, con jinetes compitiendo por puntos basados ​​en su técnica y la velocidad con la que podían derribar al toro.',
    titulo2:'Reglas y jugabilidad',
    informacion2:'El coleo se suele llevar a cabo en un recinto especialmente construido llamado manga de coleo. La manga es un recinto largo y estrecho con una talanquera, o cerca, que recorre un lado. Se suelta el toro en la manga y los jinetes, uno a la vez, intentan derribarlo.Para derribar al toro, el jinete primero debe atrapar la cola del toro con una cuerda llamada cola. Una vez asegurada la cola, el jinete espolea a su caballo hacia adelante, tirando del toro al suelo. Se considera que el toro está derribado cuando sus patas delanteras tocan el suelo.Los jinetes se puntúan en función de su técnica, la velocidad con la que derriban al toro y el control que tienen sobre su caballo. Se deducen puntos por penalizaciones como perder la cola, caer del caballo o lesionar al toro.',
    titulo3:'Significado cultural',
    informacion3:'El coleo es una parte importante de la cultura de la región de los llanos. Es un deporte profundamente arraigado en la historia y tradiciones de los llaneros. El coleo a menudo se presenta en festivales y celebraciones, y es un deporte popular para los espectadores.En conclusión el coleo de toros es un deporte ecuestre emocionante y desafiante que está profundamente arraigado en la cultura de la región de los llanos. Es un testimonio de la equitación, la habilidad y el coraje de los llaneros, y sigue siendo una tradición popular y celebrada.',
  }

  secciones: Record<SeccionID, { titulo1: string; contenido1: string ;contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;titulo4:string;contenido5:string;titulo5:string;contenido6:string;imagen1:string;imagen2:string;contenido7:string;titulo6:string;contenido8:string;titulo7:string;contenido9:string;titulo8:string;contenido10:string;titulo9:string;contenido12:string;titulo10:string;contenido13:string;titulo:string;imagen3:string;imagen4:string;imagen5:string;imagen6:string;imagen7:string;imagen8:string;imgen9:string}> = {
    Coleaadores: { titulo1: '', 
      contenido1: 'En el corazón del coleo de toros se encuentran los coleadores, jinetes hábiles y valientes que desafían a los toros en una danza de destreza y emoción. Estos atletas ecuestres representan la esencia de este deporte tradicional, encarnando el coraje, la habilidad y la conexión profunda con los caballos.',
      titulo2:'Historia y orígenes',
      contenido2:'Se cree que el coleo se originó en la región de los llanos de América del Sur durante la época colonial. Se desarrolló como una forma en que los llaneros (ganaderos) capturaban y domaban toros salvajes para marcarlos y otros fines. Con el tiempo, el coleo se convirtió en un deporte competitivo, con jinetes compitiendo por puntos basados ​en su técnica y la velocidad con la que podían derribar al toro.',
      titulo3:'Atuendos distintivos',
      contenido3:'Los coleadores se distinguen por su vestimenta característica que combina funcionalidad y tradición:Sombrero: Un sombrero de paja de ala ancha, conocido como "sombrero llanero", protege del sol y aporta estilo.Camisa: Camisas de franela o guayaberas, generalmente de colores vivos, que permiten libertad de movimiento.Pantalones: Vaqueros ajustados o "chaparreras" de cuero, que protegen las piernas de las rozaduras.Pañuelo: Un pañuelo al cuello, a menudo con estampados llamativos, absorbe el sudor y añade un toque personal.Botas: Botas de cuero resistentes que brindan estabilidad y agarre en el caballo.',
      titulo:'Número de participantes',
      contenido4:'El número de participantes en una competencia de coleo varía según el evento y la categoría. En general, se pueden observar las siguientes configuraciones:Individual: Cada coleador compite por su cuenta, buscando derribar al toro en el menor tiempo posible.Por equipos: Los coleadores se agrupan en equipos, sumando sus puntos para determinar el equipo ganador.Categorías: Las competiciones pueden dividirse en categorías por edad, género o nivel de experiencia.',
      imagen1:'coleo.jpg',titulo5:'',contenido6:'',titulo6:'',contenido7:'',titulo7:'',contenido8:'',titulo8:'',contenido9:'',titulo9:'',contenido10:'',titulo10:'',contenido5:'',titulo4:'',contenido12:'',contenido13:'',imagen2:'',imagen3:'',imagen4:'',imagen5:'',imagen6:'',imagen7:'',imagen8:'',imgen9:'',},
    manga_de_coleo: { 
      imagen2:'mangadecoelo1.PNG',
      titulo4:'Mangas de coleo',
      contenido5:'La manga de coleo, también conocida como manga de galopar o pista de coleo, es el corazón de la acción. Se trata de una estructura rectangular alargada, típicamente construida con madera o metal resistente, que sirve como el escenario principal donde se enfrentan jinetes y toros en una danza de destreza y emoción.Elementos esenciales de la manga de coleo para un coleo seguro y emocionante:Talanquera: Barrera sólida que delimita la manga y sirve como referencia para jinetes.Callejón de salida: Zona estrecha donde se liberan los toros para iniciar la carrera.Puertas de salida: Mecanismos que controlan la liberación segura de los toros.Área de jueces: Zona elevada para la observación y evaluación del desempeño de los jinetes.',
      imagen3:'plasacoleo.PNG',
      titulo5:'Plazas de coleo'
      ,contenido6:'La plaza de coleo, por otro lado, engloba un concepto más amplio que abarca la totalidad del recinto donde se celebra la competición. En ella se encuentra la manga de coleo como elemento central, pero además se integran otras áreas que complementan la experiencia:Gradas: Las tribunas donde los espectadores se acomodan para presenciar el espectáculo del coleo.Área de calentamiento: Un espacio donde los jinetes preparan a sus caballos para la competencia.Establos: Instalaciones donde se alojan los toros antes y después de las rondas.Zonas de descanso y alimentación: Áreas donde los espectadores pueden disfrutar de comida, bebidas y entretenimiento adicional.'
      ,imagen4:'plasacoleo.PNG',titulo:'',contenido1:'',titulo1:'',contenido2:'',titulo2:'',contenido3:'',titulo3:'',contenido4:'',titulo9:'',contenido7:'',titulo6:'',contenido9:'',titulo8:'',contenido8:'',titulo7:'',contenido10:'',titulo10:'',imagen1:'',imagen5:'',imagen6:'',imagen7:'',imagen8:'',contenido12:'',contenido13:'',imgen9:'',},
    caballos: { titulo:'',
       contenido7: 'El coleo de toros, deporte ecuestre arraigado en las tradiciones llaneras, exige caballos con características específicas para garantizar el éxito y la seguridad tanto del jinete como del toro. A lo largo de la historia de este deporte, diversas razas se han destacado por su idoneidad para el coleo, cada una aportando sus propias fortalezas y atributos. Entre las razas más comunes en el coleo encontramos:'
       ,titulo6:'Caballo Criollo Colombiano'
       ,contenido8:'Raza autóctona de Colombia, reconocida por su versatilidad, resistencia, temperamento dócil e inteligencia. Su agilidad y brío lo convierten en una opción popular para el coleo, especialmente en terrenos irregulares.',
       imagen5:'caballos1.PNG' ,
       titulo7:'Caballo Cuarto de Milla',
       contenido9:'Proveniente de Estados Unidos, esta raza se caracteriza por su velocidad explosiva, potencia y capacidad de reacción rápida. Su temperamento fogoso y su instinto competitivo lo hacen ideal para las exigentes demandas del coleo.',
       imagen6:'caballos2.PNG',titulo8:'Caballo Appaloosa',
       contenido10:'Famoso por su pelaje pinto y su personalidad vivaz, el Appaloosa aporta inteligencia, resistencia y un paso cómodo a las competencias de coleo. Su versatilidad lo hace adaptable a diferentes terrenos y estilos de monta.',
       imagen7:'caballos3.PNG',
       titulo9:'Caballo Purasangre',
       contenido12:'Reconocido por su velocidad y linaje aristocrático, el Purasangre aporta nobleza, brío y un espíritu competitivo innato al coleo. Su temperamento sensible requiere un jinete experimentado que sepa canalizar su energía de manera efectiva.',
       imagen8:'caballos4.PNG',
       titulo10:'Caballo zamorano'
       ,contenido13:'Raza autóctona de México, el Zamorano se distingue por su resistencia, fortaleza y adaptabilidad a terrenos difíciles. Su temperamento dócil y su paso cómodo lo convierten en una opción apreciada para el coleo, especialmente en zonas montañosas o con terrenos irregulares.',
       imgen9:'burrro.PNG',titulo1:'',contenido1:'',titulo2:'',contenido2:'',titulo3:'',contenido3:'',titulo4:'',contenido4:'',titulo5:'',contenido5:'',contenido6:'',imagen1:'',imagen2:'',imagen3:'',imagen4:''},
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
  
  constructor(private router: Router) {}
  
  navigate(ruta: string) {
    this.router.navigate([ruta]);
  }

  mostrarSeccion(nombre: SeccionID) {
    this.seccionActual = nombre;
  }
cerrarDetalle(){
  this.seccionActual=null;
}
  
}
