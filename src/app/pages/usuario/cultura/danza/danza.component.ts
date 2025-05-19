import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafeUrlPipe } from './safe-url.pipe'; // ajusta la ruta si lo mueves a otra carpeta

type SeccionID = 'tradicional' | 'espectáculo' | 'zapateos' | 'escobilleo' | 'figuras' | 'pareja_de_baile'|'corografía';


@Component({
  selector: 'app-danza',
  imports: [CommonModule,
    RouterModule,
    MatSidenavModule,
    MatButtonModule,
    SafeUrlPipe 
  ],
  templateUrl: './danza.component.html',
  styleUrl: './danza.component.css'
})
export class DanzaComponent {

 items : { img: string; alt: string; titulo: string; seccion: SeccionID }[] =  [
  { img: 'danzaTradicional.PNG', alt: 'danzaTradicional', titulo: 'danzaTradicional', seccion: 'tradicional' },
  { img: 'danzaEspetaculo.PNG', alt: 'danzaEspetaculo', titulo: 'espectáculo', seccion: 'espectáculo' },
  { img: 'zapateo.PNG', alt: 'zapateos', titulo: 'zapateos', seccion: 'zapateos' },
  { img: 'escubillado.PNG', alt: 'escobilleo', titulo: 'escobilleo', seccion: 'escobilleo' },
  { img: 'figura.jpg', alt: 'figuras', titulo: 'figuras', seccion: 'figuras' },
  { img: 'parejadebaile.jpg', alt: 'pareja_de_baile', titulo: 'Pareja de Baile', seccion: 'pareja_de_baile' },
  { img:'corografia.jpg',alt:'corografía',titulo:'corografía',seccion:'corografía'}
];

  Danza_informatiba={
    informacion1:'El joropo, con su ritmo contagioso y su alegre espíritu, es considerado el baile emblemático de los Llanos colombianos y venezolanos. Su historia se remonta a la época colonial, cuando la mezcla de culturas indígenas, europeas y africanas dio origen a este singular baile que hoy en día forma parte integral de la identidad cultural llanera.',
    titulo1:'Orígenes:',
    informacion2:'Las raíces del joropo se remontan a la época colonial, donde la mezcla de culturas indígenas, africanas y europeas dio origen a un ritmo único. Se cree que el nombre "joropo" deriva de la palabra "joropo", que en lengua indígena llanera significa "fiesta" o "baile".',
    titulo2:'Evolución en Colombia:',
    informacion3:'Joropo Llanero: El joropo por excelencia, caracterizado por su instrumentación con arpa, cuatro y maracas, y un baile en parejas con zapateos y escobillados.Joropo Oriental: Con influencias del joropo venezolano, se destaca por su ritmo rápido y la incorporación del bandolín.Joropo Tocucheño: Propio de la región del río Meta, se distingue por el uso del güacharaca y el predominio del canto.Joropo Pasaiño: Originario del Vichada, se caracteriza por su ritmo alegre y cadencioso, ideal para el baile en parejas.',
    titulo3:'Expansión Internacional:',
    informacion4:'El joropo ha trascendido las fronteras de Colombia, cautivando a audiencias en todo el mundo. Su contagiosa energía y ritmo han llegado a lugares como:Estados Unidos: En ciudades con comunidades colombianas, el joropo se ha convertido en un símbolo cultural, presente en festivales y eventos.Europa: Artistas colombianos han llevado el joropo a escenarios europeos, cautivando a públicos con su virtuosismo musical y la belleza de la danza.Asia: En países como Japón y Corea del Sur, el joropo ha despertado interés por su exotismo y riqueza cultural.',
    titulo4:'Influencias y Adaptaciones:',
    informacion5:'A medida que el joropo ha viajado por el mundo, ha absorbido influencias de otras culturas musicales, dando lugar a nuevas fusiones y estilos. Algunos ejemplos incluyen:Joropo Fusión: Combinando elementos del joropo con otros géneros como el jazz o el rock, creando sonidos frescos y vanguardistas.Joropo Urbano: Adaptando el joropo a los espacios urbanos, con coreografías modernas y puestas en escena innovadoras.',
    titulo5:'Importancia Cultural:',
    informacion6:'El joropo no es solo un baile o una expresión musical, sino una manifestación cultural que refleja la identidad y las tradiciones de los pueblos llaneros. Su evolución a lo largo del tiempo y su expansión por el mundo demuestran la vitalidad y el poder de esta herencia cultural.',
  
  }
 

  secciones: Record<SeccionID, { titulo1:string;contenido1:string;contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;titulo5:string;contenido5:string;titulo6:string;contenido6:string;titulo_video:string;video1:string;imagen1:string;titulo8?:string;contenido8?:string;video2?:string;}> = {
  tradicional:{ 
    contenido1:'El joropo tradicional, esa danza vibrante que captura la esencia de los llanos colombo-venezolanos, se compone de elementos esenciales que lo convierten en una expresión cultural única y cautivadora. A continuación, exploramos algunos de los componentes más importantes que definen al joropo tradicional:',
    titulo1:'1. Música:',
    contenido2:'Instrumentación: El corazón del joropo lo conforma un conjunto instrumental compuesto por:Arpa: Instrumento de cuerda dominante, que marca la melodía y el ritmo base.Cuatro: Guitarra pequeña de cuatro cuerdas, que acompaña la melodía y aporta armonía.Maracas: Instrumentos de percusión que marcan el pulso y crean un sonido distintivo.Voz: El canto, a veces solista y otras a dúo, narra historias y expresa emociones.Géneros: El joropo tradicional se compone de diversos géneros, cada uno con características propias:Pasaje: Ritmo más lento y romántico, ideal para el canto.Golpe: Ritmo más rápido y fiestero, propicio para el baile.Seis: Género instrumental con variaciones rítmicas y melódicas.',
    titulo2:'2. Baile:',
    contenido3:'Pasos básicos: El joropo tradicional se caracteriza por pasos básicos como:Escobillao: Movimiento de pies cortos hacia adelante y atrás, como barriendo el suelo.Zapateo: Golpeteo del suelo con los pies, ejecutado principalmente por el hombre.Vuelta: Giro de las parejas en sentido antihorario.Coreografías: A partir de los pasos básicos, se crean coreografías más elaboradas que representan historias o coqueteos entre los bailarines.',
    titulo3:'3. Vestimenta:',
    contenido4:'Traje típico llanero: Tanto hombres como mujeres visten prendas tradicionales del llano colombiano y venezolano:Liqui-liqui: Camisa suelta de manga larga para hombres, elaborada en lino o algodón.Camisa manga bombacha: Prenda similar al liqui-liqui, pero con mangas más amplias y adornadas.Falda: Prenda larga y holgada para mujeres, generalmente estampada con flores o motivos llaneros.Pañuelo: Utilizado tanto por hombres como mujeres, para adornar la cabeza o el cuello.Calzado: Se usan alpargatas o coturnos, calzado cómodo y ligero ideal para bailar.',
    titulo5:' Contexto:',
    contenido5:'Fiestas y celebraciones: El joropo tradicional se baila principalmente en fiestas populares, reuniones sociales y eventos culturales.Espontaneidad y alegría: El joropo se caracteriza por su ambiente alegre y espontáneo, donde las personas se unen para disfrutar de la música, el baile y la compañía.',
    titulo6:' Valor cultural:',
    contenido6:'Identidad llanera: El joropo tradicional es una expresión cultural fundamental para los pueblos llaneros, representando su identidad, tradiciones y forma de vida.Patrimonio cultural: El joropo ha sido reconocido como patrimonio cultural de la nación en Colombia y Venezuela, evidenciando su importancia cultural y social.',
    titulo_video:'Video prueba',
    video1:'https://www.youtube.com/embed/le_oug52eFQ',
    imagen1:'criollo1.JPG',
    video2:'',

    
  },
  espectáculo:{
   titulo8:'hola',
    contenido1:'El joropo espectáculo, también conocido como joropo bailado o joropo escénico, ha trascendido las fronteras de Colombia, cautivando a audiencias en todo el mundo con su contagiosa energía, virtuosismo técnico y despliegue de alegría. Esta variante del joropo tradicional se caracteriza por su puesta en escena elaborada, vestuarios llamativos y la maestría de sus bailarines, convirtiéndolo en un espectáculo cultural vibrante y lleno de tradición.',
    titulo1:'Música',
    contenido2:'El alma del joropo espectáculo reside en la música llanera tradicional, interpretada por un conjunto instrumental compuesto por arpa, cuatro, maracas y bandola. En algunos casos, se pueden incluir instrumentos adicionales como el bajo y la percusión, enriqueciendo aún más la experiencia sonora.Los ritmos del joropo espectáculo varían según la región y el estilo, pero entre los más populares encontramos el joropo llanero, el joropo oriental y el joropo pasaiño. Cada uno aporta su propio sabor y cadencia a la presentación.Las melodías del joropo espectáculo son contagiosas y alegres, invitando al público a unirse a la fiesta y disfrutar del ritmo vibrante de los llanos colombianos',
    titulo2:'Coreografía',
    contenido3:'Las coreografías del joropo espectáculo son elaboradas y vistosas, combinando pasos básicos del joropo tradicional con movimientos más complejos y acrobáticos. Los bailarines realizan giros, zapateos, escobillados y otros movimientos que requieren gran destreza, coordinación y dominio del espacio escénico.Las coreografías suelen narrar historias o representar escenas de la vida cotidiana en los llanos, transportando al público a este mágico entorno cultural.La creatividad y el talento de los coreógrafos son claves para crear coreografías impactantes y memorables que cautiven al público y transmitan la esencia del joropo.',
    titulo3:' Vestuario',
    contenido4:'Los trajes del joropo espectáculo son coloridos y llamativos, reflejando la alegría y la exuberancia de esta expresión cultural. Los hombres suelen vestir camisa blanca, pantalón negro y sombrero, mientras que las mujeres lucen vestidos largos y coloridos con estampados florales o alusivos a la cultura llanera.Los materiales utilizados en la confección de los trajes son variados, incluyendo telas livianas y frescas como el lino y el algodón, ideales para el clima cálido de los llanos.Los accesorios también juegan un papel importante en el vestuario del joropo espectáculo, como collares, pulseras, cinturones y sombreros, que aportan un toque de elegancia y tradición a la presentación.',
    titulo5:'Escenografía',
    contenido5:'La puesta en escena del joropo espectáculo es fundamental para crear una experiencia visual impactante y transportar al público al mundo de los llanos colombianos.Se utilizan luces, escenografías y elementos decorativos que recrean el paisaje natural de los llanos, como ríos, sabanas, palmeras y ganado.En algunos casos, se pueden incluir elementos adicionales como carretas, corrales y otros objetos típicos de la cultura llanera, enriqueciendo aún más la experiencia escénica',
    titulo6:'Virtuosismo',
    contenido6:'Los bailarines de joropo espectáculo son artistas profesionales con un alto nivel de entrenamiento y técnica. Su virtuosismo y destreza en la ejecución de los pasos y coreografías son elementos claves para el éxito de este tipo de presentaciones.La pasión y la entrega de los bailarines son contagiosas, transmitiendo al público la alegría y el fervor que caracterizan al joropo.La interacción entre los bailarines y el público es fundamental para crear una atmósfera de fiesta y celebración, invitando a todos a disfrutar de este espectáculo cultural único.',
    video1:'https://www.youtube.com/embed/TX5HzPsWhdo',titulo_video:'',
    imagen1:'imagenespetaculo.jpeg',
    video2:'',
  },
  corografía:{
    titulo_video:'',
    contenido1:'los pasos para diseñar una corógrafa',
    titulo1:'corografía',
    contenido2:'Tema: ¿Qué quieres transmitir con tu coreografía? ¿Un joropo tradicional, un homenaje a la vaquería, una historia de amor llanero? Definir el tema te ayudará a enfocar los pasos y la expresión.Música: Selecciona un joropo llanero que te inspire y se adapte al tema de tu coreografía. Ten en cuenta el ritmo, la letra y la instrumentación para crear una sincronía perfecta.',
    titulo2:'2.practicar los pasos básicos del joropo ',
    contenido3:'Pasos básicos: Aprende los pasos básicos del joropo llanero, como el zapateo, el cruce y el escobilleo. Practica estos pasos hasta dominarlos y sentirte cómodo con el ritmo.Variaciones: Investiga variaciones de estos pasos básicos para agregar complejidad e interés a tu coreografía. Puedes incluir movimientos como la vuelta entera y el torbellino.',
    titulo3:'estructura la coreografía',
    contenido4:'Introducción: Comienza con una introducción que capture la atención del público y presente el tema de la coreografía. Puedes utilizar movimientos lentos y elegantes o pasos más enérgicos para crear expectación.Desarrollo: Desarrolla la coreografía incorporando los pasos básicos y las variaciones que has aprendido. Crea secuencias de pasos que fluyan con la música y transmitan la esencia del joropo llanero.Final: Finaliza la coreografía con un cierre impactante que resuma el tema y deje una impresión duradera en el público. Puedes incluir movimientos rápidos y enérgicos o una pose final memorable.',
    titulo5:'agregar algunos elementos visuales ',
    contenido5:'Vestuario: Elige un vestuario tradicional llanero que represente la cultura y el folclor de la región. Puedes utilizar alpargatas, liqui liqui, sombrero de paja y accesorios como collares y pulseras.Utilería: Incorpora elementos típicos del llano como sombreros, pañuelos, garrochas o lazos para agregar dinamismo y visualidad a tu coreografía.Escenario: Decora el escenario con elementos que evoquen el paisaje llanero, como plantas, flores o imágenes de animales salvajes.',
    titulo6:' Ensaya y refina',
    contenido6:'Práctica constante: Dedica tiempo a ensayar la coreografía de forma regular. Repite los pasos, sincroniza con la música y presta atención a la expresión corporal y facial.Refina los detalles: Observa los videos de tu ensayo y analiza los aspectos que puedes mejorar. Ajusta los pasos, la sincronización, la fluidez y la expresión para perfeccionar tu coreografía.',
    imagen1:'aprendebaile.jpeg',video1:'https://www.youtube.com/embed/WadOSVesLYQ',
    titulo8:'holas',
    contenido8:'',
    video2:''
  },
  zapateos:{
    titulo_video:'',
    contenido1:'Práctica constante: Dedica tiempo a ensayar la coreografía de forma regular. Repite los pasos, sincroniza con la música y presta atención a la expresión corporal y facial.Refina los detalles: Observa los videos de tu ensayo y analiza los aspectos que puedes mejorar. Ajusta los pasos, la sincronización, la fluidez y la expresión para perfeccionar tu coreografía.',
    titulo1:'zapateo Metralleta',
    contenido2:'este zapateo consiste en un movimiento continuo en la cual se ejecuta un impacto con la planta del pie para luego realizar el mismo procedimiento con la otra pierna ',
    titulo2:'zapateo martillo',
    contenido3:'este zapateo Consiste en alzar levemente un pie tras otro para luego impactarlo contra el suelo  buscando golpear el talón del pie',
    titulo3:'zapateo Cincopa',
    contenido4:'este zapateo consiste en golpear de manera continua la planta del pie contra suelo, ejecutando una secuencia en la cual se realiza alrededor de 5 golpes seguidos ',
    titulo5:'zapateo Taloneo ',
    contenido5:'este zapateo Consiste en alzar de manera corta un pie tras otro para luego impactarlo contra el suelo buscando golpear el talón del pie, este a diferencia de los martillos se ejecuta de una manera más continua y secuencial',
    titulo6:'zapateo garza ',
    contenido6:'este zapateo Consiste en elevar la rodilla de una pierna y luego la otra, para luego golpearla contra el suelo, seguidamente, se golpea el talón del pie que está firme y sin levantar',
    video1:'https://www.youtube.com/embed/wEXMUM40VqM',
    video2:'',
    imagen1:'zapateosolista.jpeg',
  },
  escobilleo:{
    titulo_video:'',
    titulo1:'¿Qué es el escubillado?',
    contenido1:'el escobillado se refiere a un paso básico fundamental para el baile. Se caracteriza por un movimiento suave y deslizante de los pies, similar a la acción de barrer el suelo.',
    contenido6:'se refiere a una técnica de baile femenina que se caracteriza por movimientos suaves y deslizantes de los pies sobre el suelo, como si se "escobillaran" hacia adelante o hacia atrás. Es una contraparte del zapateo masculino, que es más rítmico y marcado.',
    titulo2:'las características del Escubillado son:',
    contenido2:'Movimiento suave y fluido: El escobillado se debe realizar con suavidad y fluidez, evitando movimientos bruscos o golpes contra el suelo.Posición correcta del cuerpo: Es importante mantener una buena postura corporal durante el baile, con la espalda recta, los hombros relajados y el abdomen contraído.Coordinación entre la pareja: El escobillado requiere coordinación entre los bailarines para que los movimientos se ejecuten de manera sincronizada y armoniosa.Adaptación al ritmo: La velocidad del escobillado debe adaptarse al ritmo de la música, acelerando o desacelerando según el tempo de la pieza.',
    titulo3:'los tipos de escubillado ',
    contenido3:'escubillado base: es un paso fundamental en el joropo, el baile tradicional de Venezuela y Colombia, que sienta las bases para patrones de zapateo más complejos y aporta ritmo, fluidez y elegancia a la danza. Es un movimiento simple pero esencial que captura la esencia del elegante juego de pies del joropo.escubillado doble: es un paso intermedio en el joropo que agrega una capa de complejidad y estilo al baile. Implica dos movimientos de barrido consecutivos con cada pie, creando un patrón más dinámico y rítmico escubillado punta talon: es un paso intermedio en el joropo que añade un toque de dinamismo y elegancia al baile. Implica un movimiento de barrido con la punta del pie, seguido de un toque con el talón, creando un patrón rítmico y fluido',
    titulo5:'Escobillado con avance y retroceso',
    contenido4:'La mujer se desliza hacia adelante y hacia atrás, combinando movimientos de avance y retroceso.',imagen1:'zapateosolista.jpeg',
    titulo6:'Escobillado con punta y talón',
    contenido5:'La mujer levanta el pie en punta o talón, para luego deslizarse, creando un movimiento más dinámico.',
    video1:'https://www.youtube.com/embed/sQurxGCqF38',
    video2:'https://www.youtube.com/embed/NOlUogLVSgo'
   },
  figuras:{
    titulo_video:'',
    titulo1:'las figuras en el joropo ',
    contenido1:'para todo el publico es la atracción mas bonito que tiene el joropo, Las figuras en el joropo no solo son pasos individuales, sino que representan la expresión corporal de la música, la alegría y la tradición llanera. ',
    titulo2:'estas son algunas figuras diamatibas ',
    titulo5:'Pechicola',
    contenido3:'esta figura consiste en coger ala pareja en medio lado como si fuera dándole vueltas y a ala ves haciendo el paso básico asi como se muestra en el video ',
    titulo6:'universal:',
    contenido4:' esta figura conciten en atravesar los brazos obteniendo una equis y pasando a la pareja por de lado sin cortarse eso hace que los admiradores del joropo se sientas mas atraídos al joropo como se muestra en el video',
    titulo3:'medias:',
    contenido6:' esta consiste en coger a la pareja por la espalda y de esa forma obtener medias bualtas como se muestra en el video',
    contenido5:'Punta de Soga: Los bailarines se toman las manos, manteniendo cierta distancia entre ellos. ',
    contenido2:'',
    imagen1:'furasjoropo.webp',
    video1:'https://www.youtube.com/embed/Xo_7mkazFVk',    
  },
  pareja_de_baile:{
    titulo_video:'',
    titulo1:'Pareja de baile ',
    contenido2:'Este tipo de baile involucran a una pareja, hay dos tipos que son tradicional y espectáculo, se diferencia por su estilo de vestir, su peinado, las figuras, las cotizas y sus sombreros.Cada tipo de baile tiene una intensidad diferente, así cómo también hay una gran diferencia en las pistas que se utilizan.',
    titulo2:'se caracteriza',
    contenido3:'Este tipo de baile es conocido como “espectáculo” es un baile intenso y con zapateos un poco marcados, el vestido es llamativo y mas voluminoso, su peina es recogido, el maquillaje va de acuerdo al tono del vestuario,',
    contenido1:'por ser de pareja agarrada, donde el hombre sujeta a la mujer por ambas manos, es él quien lleva la iniciativa, que se destaca quien determina las figuras a realizar',
    contenido4:'En este tipo de baile es conocido como “tradicional” hay un poco menos de intensidad que en el de espectáculo, con un poco más de cercanía entre la pareja, los zapateos son balseados, se utiliza pasaje y joropo como pistas principales, el vestuario es algo mas sencillo, mayormente los peinados femeninos son en trenzas con alguna pinza/moño.',
    titulo3:'bailar es arte ',
    contenido5:'es un baile tradicional del folclore llanero de Venezuela y Colombia, ejecutado por una pareja que representa tanto la armonía como el dinamismo de la cultura de los llanos.',
    titulo5:'estilo de baile en las pareja de baile ',
    titulo6:'zapateo',
    contenido6:'El hombre ejecuta pasos rítmicos y fuertes que golpean el suelo (zapateado), mientras la mujer gira, desplaza su falda y hace pasos más sutiles pero muy coordinados.',
    imagen1:'parejadebaile2.PNG',
    video1:'https://www.youtube.com/embed/yBWeAk5L77o',
   video2:'',
    
  }
  }
  seccionActual: SeccionID | null = null;
  
 mostrarSeccion(seccion: string) {
  this.seccionActual = seccion as SeccionID;
}

currentIndex = 3;

moverCarrusel(direccion: string): void {
  if (direccion === 'izquierda') {
    this.currentIndex = Math.max(0, this.currentIndex - this.currentIndex);
  } else if (direccion === 'derecha') {
    const maxIndex = this.items.length - 1;
    this.currentIndex = Math.min(maxIndex, this.currentIndex + this.currentIndex);
  }
}

ngOnInit() {
  setInterval(() => {
   this.currentIndex = (this.currentIndex + 1) % this.items.length;

  }, 2000); // cambia cada 4 segundos
}
retroceder() {
  // Cambia al ítem anterior inmediatamente
  if (this.currentIndex > 0) {
    this.currentIndex--;
  }
}
cerrarDetalle(){
  this.seccionActual=null;
}
}

