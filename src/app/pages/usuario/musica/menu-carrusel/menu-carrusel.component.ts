import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-menu-carrusel',
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule, 
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './menu-carrusel.component.html',
  styleUrls: ['./menu-carrusel.component.css']
})
export class MenuCarruselComponent {

   constructor(private router: Router) {}

  @ViewChild('carrusel') carrusel!: ElementRef;

  novedades = [
    {
      img: '/imag1.png',
      title: 'Música - Recuerda la esencia de la musica llanera',
      route: '/playlist',
    },
    {
      img: '/imag2.png',
      title: 'Cultura - conoce la diversidad del llano',
      route: '/instrumentos',
    },
    {
      img: '/imag3.png',
      title: 'Turismo - lugares mas visitados',
      route: '/lugares',
    },
  ];

  panelInfo = {
    titulo: 'Artistas',
    descripcion: 'Descubre mas informacion sobre tus artistas favoritos.'
  };

  // Las tarjetas ya no dependen de la categoría seleccionada
  cards: any[] = [
    {
      titulo: 'Yaguazo',
      imagen: '/Art1.png',
      detalle: {
        titulo: 'Biografia de Yaguazo',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'Nolberto Encinosa de Dios, conocido artísticamente como "El Yaguazo", es un destacado cantante y compositor colombiano de música llanera. Nació el 11 de septiembre de 1983 en San Vicente, una vereda del municipio de Trinidad, Casanare, a orillas del río Pauto ' },
          { tipo: 'subtitulo', contenido: '🎤 Inicios en la música' },
          { tipo: 'texto', contenido: 'A los 10 años, Yaguazo comenzó su carrera musical participando en festivales infantiles de música llanera, donde obtuvo varios primeros lugares. Su talento fue descubierto por Alexander Cáceres, quien produjo su primer trabajo discográfico titulado "Algo de mi vida" cuando tenía 11 años. Sin embargo, la repentina muerte de Cáceres llevó a Yaguazo a alejarse temporalmente de la música El mirador sorprende con su clima exuberante, donde la danza de nubes, brisa y sol crea un microclima perfecto.' },
          { tipo: 'subtitulo', contenido: '🎶 Resurgimiento y trayectoria' },
          { tipo: 'texto', contenido:'Tras superar ese difícil momento, Yaguazo retomó su carrera musical en 2004 con el álbum "Siempre a tu lado". Posteriormente, lanzó "Mi tierra llana", que incluye la canción "Mi camoruco", una de las más reconocidas de su repertorio . Su estilo auténtico y su dedicación lo han convertido en un referente de la música llanera contemporánea.'},
          { tipo: 'subtitulo', contenido: '🌍 Reconocimientos y proyección internacional' },
          { tipo: 'texto', contenido:'En junio de 2024, Yaguazo fue condecorado con la Orden de la Democracia Simón Bolívar por el Congreso de la República de Colombia, en reconocimiento a su labor en la difusión de la música llanera a nivel nacional e internacional . Su canción "Llano Viejo" se ha convertido en un himno para los migrantes, alcanzando más de 5 millones de reproducciones en plataformas digitales y siendo ampliamente compartida en redes sociales como TikTok .'},
          { tipo: 'subtitulo', contenido: '🎧 Presencia en plataformas digitales' },
          { tipo: 'texto', contenido:'Yaguazo continúa compartiendo su música a través de diversas plataformas digitales. Puedes seguir su trabajo en su canal oficial de YouTube: Su trayectoria es un testimonio de perseverancia y amor por la cultura llanera, consolidándose como una figura emblemática en la música tradicional colombiana'},
        ],
        fondo: 'mirador1.jpg'
      }
    },
    {
      titulo: 'Walter Silva',
      imagen: 'Art2.png',
      detalle: {
        titulo: 'Biografia de Walter Silva',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'es un destacado cantante y compositor colombiano, reconocido como una de las voces más influyentes de la música llanera contemporánea. Nació el 28 de marzo de 1973 en La Plata, una vereda del municipio de Pore, en el departamento de Casanare. Desde temprana edad, estuvo inmerso en las tradiciones musicales de los Llanos Orientales, influenciado por su entorno y los cantores de la época.Un águila vigilante sobre el llano' },
          { tipo: 'subtitulo', contenido: '🎶 Inicios y trayectoria musical' },
          { tipo: 'texto', contenido: 'Walter Silva comenzó su carrera artística en la década de 1990, participando en festivales escolares y programas radiales locales. Su primer reconocimiento llegó en el festival "Alma Sabanera", donde presentó su composición "Romance del Coleador". A lo largo de su carrera, ha lanzado varios álbumes exitosos, incluyendo "A que te dejas querer" (2002) y "Llanero a pulso" (2005), que consolidaron su posición en la música llanera. ' },
          { tipo: 'subtitulo', contenido: '🌟 Reconocimientos y legado' },
          { tipo: 'texto', contenido: 'Su talento ha sido reconocido con dos nominaciones al Grammy Latino: en 2008 por el álbum "Nuevo joropo colombiano: Walter Silva 20 éxitos" y en 2009 por "Ya no le camino más". Además, su canción "Ya no le camino más" se convirtió en una de las más populares del género, acumulando millones de reproducciones en plataformas digitales.' },
          { tipo: 'subtitulo', contenido: '🌍 Impacto cultural' },
          { tipo: 'texto', contenido: 'Walter Silva ha llevado la música llanera más allá de las fronteras colombianas, presentándose en escenarios internacionales y colaborando en proyectos como la musicalización del documental "Magia Salvaje" en 2015. Su compromiso con la cultura llanera y su capacidad para narrar historias cotidianas han hecho de él un referente indispensable del folclore colombiano' },
        ],
        fondo: 'cacique4.jpg'
      }
    },
    {
      titulo: 'Reinal Armas',
      imagen: 'https://intn24.lalr.co/old/venezuela-aid-reynaldo-armas-1-2.jpg',
      detalle: {
        titulo: 'Biografia de Reinal Armas',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'Reynaldo Armas Enguaima, conocido artísticamente como Reynaldo Armas y apodado El Cardenal Sabanero, es un reconocido cantante y compositor venezolano de música llanera. Nació el 4 de agosto de 1953 en Santa María de Ipire, estado Guárico, Venezuela. Desde temprana edad, mostró interés por la música, componiendo su primera canción a los 12 años y debutando en la radio a los 15. A los 17 años, se trasladó a Caracas para dedicarse profesionalmente a la música.' },
          { tipo: 'subtitulo', contenido: '🎶 Carrera musical' },
          { tipo: 'texto', contenido: 'En 1975, Armas firmó su primer contrato discográfico y lanzó su álbum debut Yo También Quiero Cantar, que tuvo éxito en Venezuela y Colombia. Su segundo álbum, La Inspiración del Poeta (1978), consolidó su popularidad y revitalizó la música llanera en el país. A lo largo de su carrera, ha escrito más de 400 canciones y grabado 34 álbumes, convirtiéndose en uno de los cantautores más prolíficos del género.' },
          { tipo: 'subtitulo', contenido: '🏆 Reconocimientos' },
          { tipo: 'texto', contenido: 'Reynaldo Armas ha recibido numerosos premios, incluidos el Guaicaipuro de Oro, Meridiano de Oro y Mara de Oro. En 2013, ganó el Grammy Latino al Mejor Álbum Folclórico por El Caballo de Oro, convirtiéndose en el primer venezolano intérprete de música llanera en recibir este galardón. En 2015, fue nuevamente nominado por su álbum La Muerte del Rucio Moro.' },
          { tipo: 'subtitulo', contenido: '🌍 Proyección internacional' },
          { tipo: 'texto', contenido: 'Armas ha llevado la música llanera a escenarios internacionales, presentándose en países como Colombia, España y Estados Unidos. Su estilo auténtico y su dedicación han hecho de él un embajador de la cultura llanera venezolana' }
        ],
        fondo: 'historia4.gif'
      }
    },
     {
      titulo: 'Milena Benitez',
      imagen: 'Art4.png',
      detalle: {
        titulo: 'Biografia de Milena Benitez',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'Milena Benites, nacida el 1 de diciembre de 1994 en Villavicencio, Meta, Colombia, es una destacada cantante de música llanera. Hija del reconocido bandolista Yesid Benítes y de Martha Prieto, también bandolista, Milena creció inmersa en el folclore llanero, lo que influyó profundamente en su carrera artística.' },
          { tipo: 'subtitulo', contenido: '🎤 Inicios y formación' },
          { tipo: 'texto', contenido: 'Desde temprana edad, Milena mostró interés por la música. A los ocho años, participó en una muestra folclórica en su colegio, interpretando la canción "La vecina", lo que marcó el inicio de su camino en el joropo. Guiada por su padre, comenzó a presentarse en festivales y concursos, destacándose por su voz recia y su interpretación apasionada del folclore llanero' },
          { tipo: 'subtitulo', contenido: '🏆 Reconocimientos' },
          { tipo: 'texto', contenido: 'A lo largo de su carrera, Milena ha recibido numerosos premios, entre ellos: ' },
          {tipo: 'texto', contenido:'Mejor Voz Recia en el Festival de Academias en Castilla La Nueva (2005 y 2006).'},
          { tipo: 'texto', contenido:'Mejor Voz Recia en el Festival Internacional Juvenil "El Topocho" en Trinidad, Casanare (2007).'}, 
          { tipo: 'texto', contenido: 'Musica Llanera Mejor Voz en el Festival Estudiantil "Guillermo Niño" en Villavicencio (2004).'},

          { tipo: 'subtitulo', contenido: '💿 Producciones discográficas' },
          { tipo: 'texto', contenido: 'Milena ha lanzado varios álbumes que fusionan el joropo tradicional con elementos contemporáneos, destacando: "Amor Criollito" (2007), "Sencillamente Criolla" (2009), "Ah llano pa ser bonito" (2016),"El Joropo es Mujer" (2023), que incluye canciones como Nací para Amarte" y "Gracias Chile" '},
          { tipo: 'subtitulo', contenido: '🤝 Colaboraciones y proyección internacional' },
          { tipo: 'texto', contenido: 'Milena ha colaborado con artistas como Walter Silva, Jorge Guerrero y Daniel Gualdrón, ampliando su alcance y llevando la música llanera a escenarios internacionales.' },
          { tipo: 'subtitulo', contenido: '🌟 Reconocimientos recientes' },
          { tipo: 'texto', contenido: 'En octubre de 2024, fue anunciada como la homenajeada de la edición 56º del Torneo Internacional del Joropo, uno de los eventos más importantes de la música llanera. .' },
          { tipo: 'subtitulo', contenido: '📱 Presencia en redes sociales' },
          { tipo: 'texto', contenido: 'Milena mantiene una activa presencia en redes sociales, donde comparte su música y conecta con sus seguidores. Puedes seguirla en: "Instagram " "Facebook" Con su talento y dedicación, Milena Benites continúa siendo una embajadora del folclore llanero, llevando su música a nuevas generaciones y escenarios internacionales.' },
        ],
        fondo: 'historia4.gif'
      }
    } ,
     {
      titulo: 'Luis Silva',
      imagen: 'Art5.png',
      detalle: {
        titulo: 'Biografia de Luis Silva',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'Luis Felipe Silva Pérez, conocido artísticamente como Luis Silva o El Barinés de Oro, es un destacado cantante y compositor venezolano de música llanera. Nació el 5 de diciembre de 1962 en Santa Rosa, estado Barinas, Venezuela. Desde temprana edad, mostró interés por la música, componiendo su primera canción a los 12 años y debutando en la radio a los 15. A los 17 años, se trasladó a Maracay para dedicarse profesionalmente a la música.' },
          { tipo: 'subtitulo', contenido: '🎶 Carrera musical' },
          { tipo: 'texto', contenido: 'Luis Silva inició su carrera a finales de la década de 1980 como intérprete de música folclórica. En 1982, lanzó su primer álbum titulado Cimarrón, seguido por Así Soy Yo en 1983. Su estilo auténtico y su dedicación lo han convertido en un referente de la música llanera contemporánea.' },
          { tipo: 'subtitulo', contenido: '🌟 Reconocimientos' },
          { tipo: 'texto', contenido: 'n 1993, fue reconocido como "Mejor Cantante de Música Criolla" en Venezuela. Al año siguiente, representó a su país en el Festival OTI de la Canción en Valencia, España, obteniendo el tercer lugar con su interpretación de "Enfurecida". Esta participación le valió una nominación al premio ACCA otorgado por la Asociación de Compositores de Miami. ' },
          { tipo: 'subtitulo', contenido: '📀 Discografía destacada' },
          { tipo: 'texto', contenido: 'A lo largo de su carrera, Luis Silva ha lanzado numerosos álbumes, entre los que se destacan:  Cimarrón (1982), Así Soy Yo (1983), Lo Que Más Quiero (1984), Enamorado De Ti (1994), Internacional (1995), El Caminante (1999), Soy Venezuela (2013)' },
          { tipo: 'subtitulo', contenido: '🎵 Canciones emblemáticas' },
          { tipo: 'texto', contenido: '"Como no voy a decir",  "Enfermo de amor",  "El barinés",  "Ella o él",  "Romance quinceañero",  "Gracias a ti",  "Linda mujer de mi pueblo",  "Sabana y amor",  "Enamorado de ti"' },
          { tipo: 'subtitulo', contenido: '🌍 Proyección internacional' },
          { tipo: 'texto', contenido: 'Luis Silva ha llevado la música llanera a escenarios internacionales, presentándose en países como Colombia, España y Estados Unidos. Su estilo auténtico y su dedicación lo han convertido en un embajador de la cultura llanera venezolana.' },
          { tipo: 'subtitulo', contenido: '📱 Presencia en redes sociales' },
          { tipo: 'texto', contenido: 'Luis Silva mantiene una activa presencia en redes sociales, donde comparte su música y conecta con sus seguidores. Puedes seguirlo en: "Instagram" Con su talento y dedicación, Luis Silva continúa siendo una figura emblemática de la música llanera, llevando su arte a nuevas generaciones y escenarios internacionales.' },
        ],
        fondo: 'historia4.gif'
      }
    },
      {
      titulo: 'El Cholo',
      imagen: 'Art6.png',
      detalle: {
        titulo: 'Biografia de El Cholo',
        descripcion: [
          { tipo: 'subtitulo', contenido: 'SU HISTORIA' },
          { tipo: 'texto', contenido: 'Orlando "Cholo" Valderrama es un destacado cantautor colombiano de música llanera, reconocido por su profunda conexión con las tradiciones del Llano y su compromiso con la difusión de esta cultura tanto en Colombia como internacionalmente.' },
          { tipo: 'subtitulo', contenido: '🧒 Infancia y formación' },
          { tipo: 'texto', contenido: 'Nacido el 23 de agosto de 1951 en Sogamoso, Boyacá, Valderrama fue trasladado a los pocos días de nacido a San Luis de Palenque, Casanare, donde creció inmerso en las labores del campo y los cantos de vaquería. Estas experiencias tempranas moldearon su identidad artística y su amor por el folclore llanero.' },
          { tipo: 'subtitulo', contenido: '🎶 Carrera musical' },
          { tipo: 'texto', contenido: 'A los 15 años, compuso su primera canción, "Bonguero del Casanare", inspirada en un pescador del río Pauto. Su debut como intérprete ocurrió durante su servicio militar. En 1978, grabó su primer álbum, "Baquiano, Horizonte y Verso", iniciando una prolífica carrera con más de 20 producciones discográficas.' },
          { tipo: 'subtitulo', contenido: '🌍 Reconocimientos y proyección internacional' },
          { tipo: 'texto', contenido: 'Valderrama ha llevado la música llanera a escenarios internacionales, siendo el primer músico del género en presentarse en China. En 2008, recibió el Grammy Latino al Mejor Álbum de Música Folclórica por su producción "¡Caballo!". Además, fue galardonado con el premio "Florentino de Oro" Honoris Causa en Venezuela, un reconocimiento exclusivo para artistas venezolanos.' },
          { tipo: 'subtitulo', contenido: '🤝 Colaboraciones y legado' },
          { tipo: 'texto', contenido: 'Ha colaborado con artistas como Carlos Vives, Fonseca y la Orquesta Filarmónica de Bogotá, fusionando el joropo con otros géneros musicales. Su compromiso con la cultura llanera lo llevó a participar en la declaración de los Cantos de Trabajo de Llano como Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO.' },
          { tipo: 'texto', contenido: 'Con más de cuatro décadas de trayectoria, "El Cholo" Valderrama continúa siendo una figura emblemática del folclore llanero, llevando la esencia del Llano a nuevas generaciones y escenarios internacionales.' },
        ],
        fondo: 'historia4.gif'
      }
    }
  ];

  detalles: any = null;

  selectedCard: any = null;

  verDetalles(card: any) {
    this.selectedCard = card;
    this.detalles = card.detalle;
  }

  cerrarDetalles() {
    this.detalles = null;
  }

  // Función para mover el carrusel a la izquierda o derecha
  scrollCarrusel(direccion: 'left' | 'right') {
    const scrollAmount = 300;
    if (this.carrusel) {
      this.carrusel.nativeElement.scrollBy({
        left: direccion === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }

    navigateTo(route: string) {
    console.log(`Navegando a ${route}`);
    this.router.navigate([route]);
  }

}
