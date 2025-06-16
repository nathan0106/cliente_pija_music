import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SafeUrlPipe } from './safe-url.pipe'; // ajusta la ruta si lo mueves a otra carpeta
import { ApiService } from '../../../../services/api.service';

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
  constructor(private apiservice:ApiService){}  

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
    titulo:'',
    informacion1:' ',
    titulo1:'',
    informacion2:'',
    titulo2:'',
    informacion3:'',
    titulo3:'',
    informacion4:'',
    titulo4:'',
    informacion5:'',
    titulo5:'',
    informacion6:'',
  
  }
 

  secciones: Record<SeccionID, { titulo1:string;contenido1:string;contenido2:string;titulo2:string;contenido3:string;titulo3:string;contenido4:string;titulo5:string;contenido5:string;titulo6:string;contenido6:string;titulo_video:string;video1:string;imagen1:string;titulo8?:string;contenido8?:string;video2?:string;}> = {
  tradicional:{
    titulo8:'', 
    contenido1:'',
    titulo1:'',
    contenido2:'',
    titulo2:'',
    contenido3:'',
    titulo3:'',
    contenido4:'',
    titulo5:'',
    contenido5:'',
    titulo6:' ',
    contenido6:'',
    titulo_video:'Video prueba',
    video1:'https://www.youtube.com/embed/le_oug52eFQ',
    imagen1:'',
    video2:'',

    
  },
  espectáculo:{
   titulo8:'información de danza espectáculo',
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
    titulo8:'corografía',
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
    contenido8:'',
    video2:''
  },
  zapateos:{
    titulo_video:'',
    titulo8:'Información de zapateo',
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
    titulo1:'Información de Escobillado ',
    contenido1:'"el escobillado se refiere a un paso básico fundamental para el baile. Se caracteriza por un movimiento suave y deslizante de los pies, similar a la acción de barrer el suelo.',
    titulo2:'¿Qué es el escobillado?',
    contenido2:'Movimiento suave y fluido: El escobillado se debe realizar con suavidad y fluidez, evitando movimientos bruscos o golpes contra el suelo.Posición correcta del cuerpo: Es importante mantener una buena postura corporal durante el baile, con la espalda recta, los hombros relajados y el abdomen contraído.Coordinación entre la pareja: El escobillado requiere coordinación entre los bailarines para que los movimientos se ejecuten de manera sincronizada y armoniosa.Adaptación al ritmo: La velocidad del escobillado debe adaptarse al ritmo de la música, acelerando o desacelerando según el tempo de la pieza.',
    titulo3:'las características del Escobillado son',
    contenido3:'escubillado base: es un paso fundamental en el joropo, el baile tradicional de Venezuela y Colombia, que sienta las bases para patrones de zapateo más complejos y aporta ritmo, fluidez y elegancia a la danza. Es un movimiento simple pero esencial que captura la esencia del elegante juego de pies del joropo.escubillado doble: es un paso intermedio en el joropo que agrega una capa de complejidad y estilo al baile. Implica dos movimientos de barrido consecutivos con cada pie, creando un patrón más dinámico y rítmico escubillado punta talon: es un paso intermedio en el joropo que añade un toque de dinamismo y elegancia al baile. Implica un movimiento de barrido con la punta del pie, seguido de un toque con el talón, creando un patrón rítmico y fluido',
    titulo5:'los tipos de escubillado',
    contenido6:'La mujer se desliza hacia adelante y hacia atrás, combinando movimientos de avance y retroceso.',
    titulo6:'Escobillado con avance y retroceso',
    contenido4:'La mujer levanta el pie en punta o talón, para luego deslizarse, creando un movimiento más dinámico.',
    titulo8:'Escobillado con punta y talón',
    contenido5:'se refiere a una técnica de baile femenina que se caracteriza por movimientos suaves y deslizantes de los pies sobre el suelo, como si se \\\"escobillaran\\\" hacia adelante o hacia atrás. Es una contraparte del zapateo masculino, que es más rítmico y marcado',
    imagen1:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaSEHbQy3tl9yB_P1Ir3dpDUrP_ZnnNeeYVQ&s',
    video1:'https://www.youtube.com/embed/sQurxGCqF38',
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

  console.log('[ngOnInit]Iniciando')

  this.apiservice.getData('Tipo_Cultura?query=Nombre:DANZA').subscribe(
    (Danza) =>{
      console.log('[Get de tipo_cultura danza]respuesta:',Danza);
      const infoEnString = Danza['Data'][0]['Informacion'];
      const infoParseada = JSON.parse(infoEnString);
      this.Danza_informatiba.titulo = infoParseada.detalles[0].subtitulo
      this.Danza_informatiba.informacion1 = infoParseada.detalles[0].descripcion
      this.Danza_informatiba.titulo1 = infoParseada.detalles[1].subtitulo
      this.Danza_informatiba.informacion2 = infoParseada.detalles[1].descripcion
      this.Danza_informatiba.titulo2 = infoParseada.detalles[2].subtitulo
      this.Danza_informatiba.informacion3 = infoParseada.detalles[2].descripcion
      this.Danza_informatiba.titulo3 = infoParseada.detalles[3].subtitulo
      this.Danza_informatiba.informacion4 = infoParseada.detalles[3].descripcion
      this.Danza_informatiba.titulo4 = infoParseada.detalles[4].subtitulo
      this.Danza_informatiba.informacion5= infoParseada.detalles[4].descripcion
      this.Danza_informatiba.titulo5 = infoParseada.detalles[5].subtitulo
      this.Danza_informatiba.informacion6 = infoParseada.detalles[5].descripcion
    },
    (Error)=>{
      console.error('[GET Tipo_cultura danza]error',Error);
      alert('error al lleger al primer GET');
    }
  );
  this.apiservice.getData('Cultura?query=IdTipoCultura.Id:37').subscribe(
    (TIPICODANZA)=>{
      console.log('[GET danza]responde',TIPICODANZA)
      const data =TIPICODANZA.Data;
      const DANZAS =(data as any[]).map(item => item.Informacion)
      const InformacionDanza = DANZAS
        .map(info => {
          try{
            return JSON.parse(info);
          }catch(e){
            console.error('Error al pasar informacion:',info,e);
            return null;
          }
        })
        .filter(info => info !== null);

      if(InformacionDanza.length >= 7 ){
        console.log("datos generales",InformacionDanza)
        const Tipescubillado = InformacionDanza [2];
        const Tiptradicional = InformacionDanza[6];
        const Tipcorografia = InformacionDanza[1];
        const Tipzapatero = InformacionDanza[5];
        const tipfiguras = InformacionDanza[4];
        const tipParejaDaile = InformacionDanza[0];
        
        this.secciones.tradicional.titulo8 = Tiptradicional.secciones[0].subtitulo||'';
        this.secciones.tradicional.contenido1 = Tiptradicional.secciones[0].descripcion||'';
        this.secciones.tradicional.titulo1 = Tiptradicional.secciones[1].subtitulo||'';
        this.secciones.tradicional.contenido2 = Tiptradicional.secciones[1].descripcion||'';
        this.secciones.tradicional.titulo2 = Tiptradicional.secciones[2].subtitulo||'';
        this.secciones.tradicional.contenido3 = Tiptradicional.secciones[2].descripcion||'';
        this.secciones.tradicional.titulo3 = Tiptradicional.secciones[2].subtitulo||'';
        this.secciones.tradicional.contenido4 = Tiptradicional.secciones[3].descripcion||'';
        this.secciones.tradicional.titulo5 = Tiptradicional.secciones[3].subtitulo||'';
        this.secciones.tradicional.contenido5 = Tiptradicional.secciones[4].descripcion||'';
        this.secciones.tradicional.titulo6 = Tiptradicional.secciones[4].subtitulo||'';
        this.secciones.tradicional.contenido6 = Tiptradicional.secciones[5].descripcion||'';
        this.secciones.tradicional.video1 = Tiptradicional.secciones[5].videoUrl
        this.secciones.tradicional.imagen1 = Tiptradicional.secciones[6].imagen

        this.secciones.espectáculo.titulo8 = Tipescubillado.secciones[0].subtitulo||'';
        console.log("este es el titulo8 espetaculo",Tipescubillado.secciones)
        this.secciones.espectáculo.contenido1 = Tipescubillado.secciones[1].descripcion||'';
        this.secciones.espectáculo.titulo1 = Tipescubillado.secciones[1].subtitulo||'';
        this.secciones.espectáculo.contenido2 = Tipescubillado.secciones[1].descripcion||'';
        this.secciones.espectáculo.titulo2 = Tipescubillado.secciones[2].subtitulo||'';
        this.secciones.espectáculo.contenido3 = Tipescubillado.secciones[2].descripcion||'';
        this.secciones.espectáculo.titulo3 = Tipescubillado.secciones[3].subtitulo||'';
        this.secciones.espectáculo.contenido4 = Tipescubillado.secciones[3].descripcion||'';
        this.secciones.espectáculo.titulo5 = Tipescubillado.secciones[4].subtitulo||'';
        this.secciones.espectáculo.contenido5 = Tipescubillado.secciones[4].descripcion||'';
        this.secciones.espectáculo.titulo6 = Tipescubillado.secciones[5].subtitulo||'';
        this.secciones.espectáculo.contenido6 = Tipescubillado.secciones[5].descripcion||'';
        this.secciones.espectáculo.video1 = Tipescubillado.secciones[6].videoUrl||'',
        this.secciones.espectáculo.imagen1 = Tipescubillado.secciones[6].imagen

      }  
    },
    (error) => {
      console.error('[GET cultura danza]erroe',error);

      alert('error al llegar el get')
    }
  )
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

