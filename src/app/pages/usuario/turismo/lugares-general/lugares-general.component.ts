import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectChange } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-lugares-general',
  imports: [
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    CommonModule

  ],
  templateUrl: './lugares-general.component.html',
  styleUrl: './lugares-general.component.css'
})
export class LugaresGeneralComponent {

  @ViewChild('carrusel') carrusel!: ElementRef;

  panelInfo = {
    titulo: 'Vive las Experiencia',
    descripcion: 'Selecciona una categoría para descubrir actividades emocionantes y lugares inolvidables.'
  };

  categorias = [
    { value: 'senderismo', viewValue: 'Senderismo' },
    { value: 'actividad_familiar', viewValue: 'Actividad Familiar' },
    { value: 'lugares_historicos', viewValue: 'Lugares Históricos' },
    { value: 'restaurantes', viewValue: 'Restaurantes' },
    { value: 'eventos_culturales', viewValue: 'Eventos Culturales' },
  ];

  selectedCategoria = '';
  cards: any[] = [];
  detalles: any = null;

  dataPorCategoria: any = {
    senderismo: [
      {
        titulo: 'Mirador virgen de Manare',
        imagen: 'mirador.jpg',
        texto: 'Carrera 17 # 21-55',
        detalle: {
          titulo: 'Mirador virgen de Manare',
          descripcion: [
           // { tipo: 'titulo', contenido: 'Ruta hacia la cima del cerro' },
            { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'El Mirador de la Virgen de Manare se alza como un símbolo de fe y belleza en la ciudad de Yopal, Casanare. Este lugar sagrado, venerado por los yopaleños como un sitio de peregrinación, ofrece una experiencia única que combina la majestuosidad del paisaje llanero con la devoción religiosa.' },
            { tipo: 'subtitulo', contenido: 'Un oasis de paz y naturaleza' },
            { tipo: 'texto', contenido: 'El mirador sorprende con su clima exuberante, donde la danza de nubes, brisa y sol crea un microclima perfecto para disfrutar de las vistas panorámicas. Desde lo alto, se extiende el horizonte del amanecer llanero, brindando una imagen cautivadora del río Cravo Sur y del municipio de Yopal.' },
            { tipo: 'subtitulo', contenido: 'Un reto para los deportistas' },
            { tipo: 'texto', contenido: 'El camino que conduce al mirador también se ha convertido en una ruta popular para los amantes del deporte. Caminantes y ciclistas encuentran en la pendiente un desafío que les permite poner a prueba su resistencia mientras disfrutan del paisaje natural.'},
            { tipo: 'subtitulo', contenido: 'Un símbolo de fe y tradición' },
            { tipo: 'texto', contenido: 'El monumento de la Virgen de Manare, patrona de los casanareños, ocupa un lugar central en el mirador. Cada año, durante la Semana Santa, se realiza una procesión del viacrucis que atrae a cientos de feligreses que buscan acercarse a este lugar sagrado. El Mirador de la Virgen de Manare es más que un simple mirador, es un punto de encuentro entre la naturaleza, la fe y la cultura de Yopal. Un lugar que invita a la reflexión, la contemplación y la conexión con la belleza del entorno llanero.'},
            { tipo: 'subtitulo', contenido: 'Ubicación' },
            { tipo: 'texto', contenido:'El Mirador de la Virgen de Manare se ubica a 2.6 kilómetros aproximadamente de la Marginal de la Selva, vía a la Electrificadora, hacia el cerro El Venado. '}
          ], 
          imagenes: ['ciudad.jpg', 'virgen.jpg', 'camino.jpeg'],
          fondo: 'mirador1.jpg'
        }
      },
      {
        titulo: 'Balcones del Cacique',
        imagen: 'cacique.jpeg',
        texto: 'Calle 19 # 10-14',
        detalle: {
          titulo: 'Balcones del Cacique',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Un águila vigilante sobre el llano' },
            { tipo: 'texto', contenido: 'Imagina un lugar majestuoso, encaramado sobre las montañas como un águila vigilante que custodia la llanura. Ese lugar es Balcones del Cacique, un mirador que te ofrece una vista panorámica de casi 360 grados, tanto de las extensas llanuras casanareñas como de las imponentes serranías que las rodean.' },
            { tipo: 'subtitulo', contenido: 'Un paisaje de ensueño' },
            { tipo: 'texto', contenido: 'A casi mil metros de altura sobre el nivel del mar, te invadirá una sensación de frescura y vitalidad. El aire puro te llenará los pulmones y la vista se te perderá en un horizonte infinito de verdes praderas y montañas azules. Es como si te encontraras dentro de un cuadro de un maestro pintor, un paisaje de ensueño hecho realidad.'},
            { tipo: 'subtitulo', contenido: 'Más allá del horizonte' },
            { tipo: 'texto', contenido: 'Si subes un poco más, hasta el mirador del Cacique, la emoción se intensifica. A más de 1200 metros sobre el nivel del mar, el mundo se extiende a tus pies. En un día claro, podrás ver incluso municipios lejanos como Aguazul o Monterrey.'},
            { tipo: 'subtitulo', contenido: 'Naturaleza, arte y emociones' },
            { tipo: 'texto', contenido: 'Balcones del Cacique es más que un mirador. Es un lugar donde la naturaleza, el arte y las emociones se unen para crear una experiencia única. Aquí podrás disfrutar de miradores impresionantes, respirar aire puro, contemplar paisajes de ensueño y conectarte con la tierra. Y si quieres extender la experiencia, puedes hospedarte y vivir estas sensaciones durante más días.'},
            { tipo: 'subtitulo', contenido: 'Ubicación' },
            { tipo: 'texto', contenido:'Balcones del Cacique, esta ubicado a 15 kilómentro de casco urbano de Tauramena Casanare.'}
          ] ,
          imagenes: ['cacique1.jpeg', 'cacique2.jpg','cacique3.jpeg'],
          fondo: 'cacique4.jpg'
        }
      },
      {
        titulo: 'Parque Tematico-Historia de Piedra',
        imagen: 'historia de piedra.jpg',
        texto: 'A 3km de Yopal.',
        detalle: {
          titulo: 'Parque Tematico-Historia de Piedra',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'En las alturas de Yopal, a solo 10 minutos de la ciudad, se encuentra el Parque Temático Historias de Piedra. Un espacio mágico donde el arte y la naturaleza se unen para ofrecer una experiencia inolvidable. Más de 20 esculturas talladas en piedra nativa dan vida a la fauna y la herencia ancestral de la región. Un recorrido por el parque te lleva a través de un sendero rodeado de estas obras de arte, hasta llegar a un mirador espectacular con vistas panorámicas de la ciudad y la llanura casanareña, a más de 700 metros de altura. El parque es obra del mismo escultor que ha dado vida a las figuras en piedra. Un artista apasionado por su tierra que ha plasmado su visión en este espacio único. Disfruta de un clima fresco, a veces frío, mientras te deleitas con bebidas frías y calientes, como agudepanela con queso, chocolate, canelazo, picadas y hamburguesas. Un ambiente acogedor para descansar y disfrutar de la compañía de tus seres queridos. Si buscas una experiencia cultural diferente en Yopal, no te pierdas el Parque Temático Historias de Piedra. Un lugar para conectar con la naturaleza, la historia y el arte de la región. ' },
            { tipo: 'texto', contenido:'Sin duda, el Parque Temático Historias de Piedra es un lugar que vale la pena visitar para conocer la historia, la cultura y la belleza natural de la región de Casanare.'}
          ] ,
          imagenes: ['historia1.jpg', 'historia2.jpg','historia3.jpg'],
          fondo: 'historia4.gif'
        }
      },
    ],
    actividad_familiar: [
      {
        titulo: 'Parque Resurgimiento',
        imagen: 'parque.jpeg',
        texto: 'Una caminata con vistas increíbles.',
        detalle: {
          titulo: 'Caminata al Pico',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'Ubicado en el corazón de Yopal, Casanare, el Parque El Resurgimiento se erige como un refugio verde y vibrante en medio de la ciudad. Sus amplias zonas verdes, salpicadas de árboles frondosos y senderos serpenteantes, invitan a los visitantes a sumergirse en un ambiente de tranquilidad y paz. Sin embargo, este parque alberga una historia fascinante que lo convierte en un lugar aún más atractivo para explorar. Entre los años 1938 y 1939, el Parque El Resurgimiento tuvo la distinción de ser el primer aeropuerto municipal de Yopal, conocido como "La Última Lágrima". Este peculiar nombre evocaba la nostalgia y las despedidas sentidas que se producían entre los viajeros y sus seres queridos al emprender sus viajes. Hoy en día, el parque ha dejado atrás su pasado aeroportuario para convertirse en un escenario cultural y de esparcimiento para la comunidad. El Festival Internacional El Cimarrón de Oro es uno de los eventos más destacados que se celebran en este espacio, donde la música, la danza y las tradiciones llaneras cobran vida, llenando el parque de alegría y color.' },
            { tipo: 'subtitulo', contenido: 'Actividades para realizar' },
            { tipo: 'texto', contenido: 'Paseos en familia: Recorrer los senderos del parque a pie, en bicicleta o en patines es una excelente manera de disfrutar del aire libre y observar la belleza natural del lugar.'},
            { tipo: 'texto', contenido: 'Picnic familiar: Disfrutar de un delicioso picnic bajo la sombra de los árboles es una tradición familiar que encanta a todos. No olvides llevar una manta, comida, bebidas y juegos para hacer de este momento una experiencia aún más especial.'},
            { tipo: 'texto', contenido: 'Paseos en familia: Recorrer los senderos del parque a pie, en bicicleta o en patines es una excelente manera de disfrutar del aire libre y observar la belleza natural del lugar.'},
            { tipo: 'texto', contenido: 'Observación de aves: El parque alberga una gran variedad de aves, lo que lo convierte en un lugar ideal para realizar actividades de observación de aves. Puedes llevar binoculares para tener una mejor vista y aprender sobre las diferentes especies que habitan en el parque.'},
          ],
          imagenes: ['parque1.jpg', 'parque2.jpg', 'parque3.jpeg', 'parque4.jpeg'],
          fondo: 'mirador1.jpg'
        }
      },
       {
        titulo: 'Oasis Eco Park',
        imagen: 'oasis.png',
        texto: 'Tauramena 4.5 km al norte de la Carrera 16.',
        detalle: {
          titulo: 'Oasis Eco Park',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'Oasis Eco-Park es un emocionante proyecto turístico nuevo que se encuentra en construcción en Tauramena, Casanare, Colombia. Si bien aún no está completamente desarrollado, ya ofrece varias atracciones interesantes, que incluyen deportes extremos, una piscina natural y una pista de cuatrimotos. Una vez que esté completamente abierto, Oasis Eco-Park seguramente será un destino popular para los amantes de la naturaleza y la aventura.' },
            { tipo: 'subtitulo', contenido: 'Un lugar para relajarse' },
            { tipo: 'texto', contenido: 'La piscina natural de Oasis Eco-Park es el lugar perfecto para refrescarte en un día caluroso. Las aguas cristalinas de la piscina son una vista refrescante. Disfruta de un refrescante baño o simplemente toma el sol junto a la piscina.'},
            { tipo: 'texto', contenido: 'Disfruta de un paseo emocionante en la pista de cuatrimotos del parque (solo fines de semana). explora los senderos del parque en un vehículo todo terreno'},
            { tipo: 'texto', contenido: 'Sube tu adrenalina con las actividades de deportes extremos del parque. Ponte a prueba en los Bici cables o en el puente tibetano, o espera a que la tirolesa y el columpio abran pronto.'},
            { tipo: 'texto', contenido: 'Tómate un descanso del calor y disfruta de un refrescante baño en la piscina natural del parque. Las aguas cristalinas de la piscina son una vista refrescante y es el lugar perfecto para relajarse y tomar el sol. Acelera tu corazón con un emocionante paseo en cuatrimoto por la pista de tierra del parque. Explora los senderos del parque y desafía a tus amigos a una carrera. Esta actividad solo está disponible los fines de semana.'},
            { tipo: 'texto', contenido: 'Bici cables: Disfruta de un paseo emocionante por los árboles en los Bici cables del parque.'},
            { tipo: 'texto', contenido: 'Puente tibetano: Pon a prueba tu equilibrio y coraje en el puente tibetano del parque.'},
            { tipo: 'texto', contenido: 'Columpio: Balanceate alto sobre los árboles en el columpio del parque.'},
            { tipo: 'texto', contenido: 'Cuatrimotos: Compite con tus amigos y disfruta de un momento lleno de adrenalina'},
          ],
          imagenes: ['oasis1.png', 'oasis5.jpeg', 'oasis3.png', 'oasis4.png',],
          fondo: 'oasis5.jpeg'
        }
      },
       {
        titulo: 'Villa Al Revés',
        imagen: 'villa.jpg',
        texto: 'Tauramena 5.5 km al norte de la Carrera 16.',
        detalle: {
          titulo: 'Villa Al Revés',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Explorar Villa Alreves' },
            { tipo: 'texto', contenido: 'Esta villa al revés es una atracción turística ingeniosa. sus techos, paredes y pisos están colocados al revés desafiando la gravedad y jugando con la percepción visual de los visitantes ¡ es un lugar perfecto para tomar fotos divertidas! La atracción principal del parque son tres casas que están construidas completamente al revés. Esto significa que el techo está en el suelo, los muebles están en el techo y las personas caminan por las paredes. Es una experiencia única y divertida que te hará sentir como si estuvieras en otro mundo. Villa al Revés es un lugar perfecto para toda la familia. Los niños se divertirán explorando las casas al revés y jugando en los juegos, mientras que los adultos podrán relajarse y disfrutar del ambiente único del parque. Además de la villa, el clima y el paisaje en Tauramena son hermosos. Aprovecha para apreciar la naturaleza y respirar aire fresco.' },
            { tipo: 'subtitulo', contenido: 'Cómo llegar a Villa al Revés' },
            { tipo: 'texto', contenido: 'Villa al Revés se encuentra en la vía Yopal - Tauramena, a unos 10 kilómetros de Yopal, la capital del departamento de Casanare. El parque está abierto de lunes a domingo de 9:00 a. m. a 5:00 p. m. '},
            { tipo: 'subtitulo', contenido: 'Valor de ingreso' },
            { tipo: 'texto', contenido: ' La entrada a Villa al Revés tiene un costo de $10.000 para adultos y $5.000 para niños'},
            { tipo: 'texto', contenido: 'sitio web: https://www.google.com/maps/place/Villa+al+Rev%C3%A9s/@5.0592921,-72.7523801,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6ad96a6940d6c7:0xb7b6d07f008e99b5!8m2!3d5.0592921!4d-72.7498052!16s%2Fg%2F11tmvj6hfb?hl=es&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'},
          ],
          imagenes: ['villa1.jpg', 'villa2.jpg', 'villa3.jpg',],
          fondo: 'villa3.jpg'
        }
      },
       {
        titulo: 'Arca de Noe',
        imagen: 'arca.png',
        texto: 'Vereda El Jagüito, Tauramena, Casanare.',
        detalle: {
          titulo: 'Arca de Noe',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Animate a Conocer' },
            { tipo: 'texto', contenido: 'El Arca de Noé en Tauramena, Casanare, Colombia, es un parque temático que recrea la historia bíblica del arca de Noé, ubicada en la vereda El Jagüito. Este sitio turístico ofrece una experiencia educativa y recreativa donde se puede aprender sobre el relato del Génesis, disfrutar de un museo, una piscina y un mirador con vistas a la región.'},
            { tipo: 'subtitulo', contenido: 'Actividades' },
            { tipo: 'texto', contenido: 'Visitar el museo, disfrutar del mirador, relajarse en la piscina, comprar souvenirs y degustar productos locales.'},
            { tipo: 'subtitulo', contenido: 'Consideraciones' },
            { tipo: 'texto', contenido: 'El Arca de Noé en Tauramena es una atracción turística popular en la región de Casanare, que atrae a visitantes de todas las edades. Es un lugar ideal para aprender sobre la historia bíblica, disfrutar en familia y pasar un día agradable en un entorno natural.'},
            { tipo: 'texto', contenido: 'sitio web: https://www.google.com/maps/place/Villa+al+Rev%C3%A9s/@5.0592921,-72.7523801,17z/data=!3m1!4b1!4m6!3m5!1s0x8e6ad96a6940d6c7:0xb7b6d07f008e99b5!8m2!3d5.0592921!4d-72.7498052!16s%2Fg%2F11tmvj6hfb?hl=es&entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D'},
          ],
          imagenes: ['arca2.png', 'arca5.png', 'arca3.png',],
          fondo: 'arca1.png'
        }
      }
    ],
    lugares_historicos: [
      {
        titulo: 'Museo Historico Del Oriente',
        imagen: 'museo.jpg',
        texto: 'Calle 29 # 20 - 41',
        detalle: {
          titulo: 'Museo Historico Del Oriente',
          descripcion: [
             { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'El Museo Centro Histórico del Oriente es un museo ubicado en la ciudad de Yopal, Casanare, Colombia. El museo fue inaugurado en el año 2021 y tiene como objetivo preservar y difundir la historia y la cultura de la región del Piedemonte Llanero. Las colecciones del museo incluyen piezas arqueológicas, fotografías, documentos históricos y objetos de la vida cotidiana de los habitantes de la región. El museo también cuenta con una sala de exposiciones temporales y un auditorio donde se realizan conferencias, talleres y eventos culturales.' },
            { tipo: 'subtitulo', contenido: 'Piezas arqueológicas' },
            { tipo: 'texto', contenido: 'El museo cuenta con una colección de piezas arqueológicas que datan de la época precolombina. Estas piezas incluyen vasijas de cerámica, figuras de barro y herramientas de piedra.'},
            { tipo: 'subtitulo', contenido: 'Fotografías' },
            { tipo: 'texto', contenido: 'El museo cuenta con una amplia colección de fotografías que documentan la historia de la región del Piedemonte Llanero. Estas fotografías muestran la vida cotidiana de los habitantes de la región, los paisajes naturales y los eventos históricos más importantes.'},
            { tipo: 'subtitulo', contenido: 'Documentos históricos' },
            { tipo: 'texto', contenido: 'El museo cuenta con una colección de documentos históricos que datan de la época de la colonia española hasta la actualidad. Estos documentos incluyen actas de fundación, escrituras de propiedad y periódicos antiguos.'},
            { tipo: 'subtitulo', contenido: 'Objetos de la vida cotidiana'},
            { tipo: 'texto', contenido:'El museo cuenta con una colección de objetos de la vida cotidiana de los habitantes de la región del Piedemonte Llanero. Estos objetos incluyen herramientas de trabajo, ropa, muebles y utensilios de cocina.'},
            { tipo: 'subtitulo', contenido: 'Valor de ingreso'},
            { tipo: 'texto', contenido:'Precio de la entrada: $5.000 para adultos y $2.000 para niños'},
            { tipo: 'subtitulo', contenido: 'Horario de atención'},
            { tipo: 'texto', contenido:'Horario de atención: De martes a domingo de 8:00 a. m. a 5:00 p. m.'},
            { tipo: 'texto', contenido: 'Sitio web: https://www.bing.com/search?q=sitio%20web%20del%20museo%20historico%20del%20oriente&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=sitio%20web%20del%20museo%20historico%20del%20oriente&sc=12-41&sk=&cvid=436BB737D5D2467F9F15E1376432DE9B' },
          ],
          imagenes: ['museo2.jpg', 'museo3.webp','museo4.jpeg','museo6.webp'],
          fondo: 'museo1.jpg'
        }
      },
       {
        titulo: 'Ruinas De Pore',
        imagen: 'pore.jpg',
        texto: '70 km desde Yopal',
        detalle: {
          titulo: 'Ruina De Pore',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'HISTORIA' },
            { tipo: 'texto', contenido: 'En el municipio de Pore, Casanare, Colombia, se encuentran las Ruinas de Pore, vestigios de una antigua misión jesuítica fundada en el siglo XVII. Estas ruinas son un testimonio de la rica historia colonial de la región y un atractivo turístico que vale la pena visitar. La misión de Pore fue fundada en 1639 por los jesuitas españoles. Su objetivo era evangelizar a los indígenas de la región y enseñarles las costumbres y la religión católica. La misión prosperó durante varios años y llegó a tener una población de más de mil personas. Sin embargo, en 1767, los jesuitas fueron expulsados de Colombia y la misión fue abandonada.' },
            { tipo: 'texto', contenido: 'Sitio web: https://satellites.pro/mapa_de_Municipio_Pore.Region_de_Casanare.Colombia#5.716098,-72.012634,14' },
          ],
          imagenes: ['pore7.jpg','pore6.jpg', 'pore5.jpg','pore3.jpg','pore4.jpg'],
          fondo: 'pore2.png'
        }
      },
       {
        titulo: 'Monte De Jehová',
        imagen: 'monte.jpg',
        texto: 'vereda Buenavista, a 8 kilómetros del municipio de Yopal',
        detalle: {
          titulo: 'Monte De Jehová',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción' },
            { tipo: 'texto', contenido: 'El Monte de Jehová es un lugar religioso y turístico que alberga una escultura gigante de la Biblia tallada en piedra. La escultura tiene 19 metros de ancho y 12 metros de largo, y es considerada la Biblia más grande del mundo.' },
            { tipo: 'subtitulo', contenido: 'Actividades' },
            { tipo: 'texto', contenido: 'Admirar la escultura de la Biblia: La escultura es una obra de arte impresionante que vale la pena ver de cerca.' },
            { tipo: 'texto', contenido: 'Orar y reflexionar: El Monte de Jehová es un lugar tranquilo y pacífico que es ideal para la oración y la reflexión' },
            { tipo: 'texto', contenido: 'Disfrutar de las vistas: Desde el Monte de Jehová se pueden disfrutar de unas vistas panorámicas impresionantes de la región.' },
            { tipo: 'texto', contenido: 'Hacer senderismo: Hay varios senderos para caminar en la zona que ofrecen diferentes niveles de dificultad.' },
            { tipo: 'subtitulo', contenido: 'Horarios' },
            { tipo: 'texto', contenido: 'Lunes a domingo de 7:01 a.m. a 5:00 p.m' },
            { tipo: 'subtitulo', contenido: 'Información de contacto' },
            { tipo: 'texto', contenido: 'Celular: 320 9420403' },
            { tipo: 'texto', contenido: 'Sitio web: https://maps.google.com/?cid=18346910408072708299' },


          ],
          imagenes: ['pore7.jpg','pore6.jpg', 'pore5.jpg','pore3.jpg','pore4.jpg'],
          fondo: 'pore2.png'
        }
      },

    ],
    restaurantes: [
      {
        titulo: 'La Mamona',
        imagen: 'mamona.jpg',
        texto: 'Calle 11 con 19',
        detalle: {
          titulo: 'La Mamona',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción'},
            { tipo: 'texto', contenido: 'Es un establecimiento especializado en comida de tipo churrasquería, ofreciendo una variedad de platos colombianos.'},
            { tipo: 'texto', contenido: 'Preparan un sabroso caldo de pescado y un delicioso cerdo. Tienes que pedir el delicioso café del lugar.'},
            { tipo: 'texto', contenido: 'Pueden disfrutar de músico y presentaciones de baile en vivo.'},


          ],
          imagenes: ['mamona1.png', 'mamona2.png','mamona3.png',],
          fondo: 'mamona4.png'
        }
      },
       {
        titulo: 'Asadero  El Corral',
        imagen: 'corral.jpg',
        texto: 'Km 6 Vía Sirivana.',
        detalle: {
          titulo: 'Asadero El Corral',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción'},
            { tipo: 'texto', contenido: 'Restaurante Campestre para compartir en familia.' },
            { tipo: 'subtitulo', contenido: 'En este establecimiento ofrecen'},
            { tipo: 'texto', contenido: 'Sancocho de gallina.'},
            { tipo: 'texto', contenido: 'Carne Asada.'},
            { tipo: 'texto', contenido: 'Arepa Pajariteña.'},
            { tipo: 'texto', contenido: 'Rellenas.'},
            { tipo: 'texto', contenido: 'Envueltos.'},
            { tipo: 'texto', contenido: 'Marrano Frito.'},
            { tipo: 'texto', contenido: 'Picadas.'},
            { tipo: 'subtitulo', contenido: 'Atencion al público'},
            { tipo: 'texto', contenido: 'Domingos-Sábados-Festivos'},
            { tipo: 'subtitulo', contenido: 'Información de contacto' },
            { tipo: 'texto', contenido: 'Celular: 3132794848' },
            { tipo: 'texto', contenido: 'Sitio web: https://www.bing.com/search?q=asadero%20el%20corral%20via%20sisrivana%20km%206%20yopal%20casanare&qs=n&form=QBRE&sp=-1&ghc=1&lq=0&pq=asadero%20el%20corral%20via%20sisrivana%20km%206%20yopal%20casanare&sc=7-51&sk=&cvid=40499CCD87604E819F1F28710280693F' },
            
          ],
          imagenes: ['corral1.png','corral2.png', 'corral3.png','corral4.png','corral5.png','corral6.png','corral7.png','corral8.png','corral9.png','corral11.png','corral12.png'],
          fondo: 'corral10.png'
        }
      },
       {
        titulo: 'El Brasero',
        imagen: 'brasero7.png',
        texto: 'Carrera 19 # 18-66',
        detalle: {
          titulo: 'El Brasero',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción' },
            { tipo: 'texto', contenido: 'En este establcimiento ofrecen variedad de platos, sabores y colores. Tambien organizan el lugar para fechas esperciales. Es un lugar bonito y acojedor'},
            { tipo: 'subtitulo', contenido:' Entre esos estan:'},
            { tipo: 'texto', contenido: 'Carne a la Parrilla.' },
            { tipo: 'texto', contenido: 'Pollo.'},
            { tipo: 'texto', contenido: 'Alitas de pollo.' },
            { tipo: 'texto', contenido: 'Carne de Res.' },
            { tipo: 'texto', contenido: 'Camarón.' },
            { tipo: 'texto', contenido: 'Pollo.'},
            { tipo: 'texto', contenido: 'Mariscos.' },
            { tipo: 'texto', contenido: 'Queso.' },
            { tipo: 'texto', contenido: 'Rosbif.'},
            { tipo: 'texto', contenido: 'Filete de Atún.'},
            { tipo: 'texto', contenido: 'También tienen variedad de bebidas.' },
            { tipo: 'subtitulo', contenido: 'Horarios' },
            { tipo: 'texto', contenido: 'Domingo 11:00am a 6:00pm Lunes a Sábado 11:00am a 11:00pm'},
            { tipo: 'subtitulo', contenido: 'Información de contacto' },
            { tipo: 'texto', contenido: 'Celular: 3132794848' },
            { tipo: 'texto', contenido: 'Sitio web:https://www.google.com/maps/search/el+brasero+yopal/@5.3432991,-72.3987699,16z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D' },

          ],
          imagenes: ['brasero1.png','brasero2.png','brasero3.png', 'brasero7.png','brasero5.png','brasero8.png','brasero9.png','brasero10.png','brasero11.png','brasero12.png','brasero13.png'],
          fondo: 'brasero4.png'
        }
      },

    ],
    eventos_culturales: [
      {
        titulo: 'Canare Palpita',
        imagen: 'palpita.jpg',
        texto: 'Yopal-Casanare',
        detalle: {
          titulo: 'Casanare Palpita',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción'},
            { tipo: 'texto', contenido: 'Casanare Palpita es un Festival Mundial del Arraigo Llanero que se realiza en el departamento de Casanare, Colombia. El festival busca promover el turismo y la cultura de la región, a través de la música, el baile, el arte y la gastronomía típica de los llanos Casanare Palpita se celebra cada año en el mes de julio y fue institucionalizado por la Ordenanza 023 de 20222. Casanare Palpita es un festival cultural que celebra la música, el baile, la gastronomía y la artesanía tradicional de la región de los Llanos Orientales de Colombia. El festival se lleva a cabo anualmente en la ciudad de Yopal, Casanare, y presenta una variedad de eventos, que incluyen conciertos, competencias, talleres y exposiciones.'},
            { tipo: 'subtitulo', contenido: 'Actividades'},
            { tipo: 'texto', contenido: 'El festival ofrece una amplia gama de actividades para visitantes de todas las edades. Estos son algunos de los aspectos más destacados:'},
            { tipo: 'texto', contenido: 'Conciertos: El festival presenta actuaciones de algunos de los músicos llaneros más populares, tanto locales como internacionales.'},
            { tipo: 'texto', contenido: 'Competencias: Hay competencias en diversas categorías, que incluyen baile joropo, canto y arreo de ganado.'},
            { tipo: 'texto', contenido: 'Talleres: Los visitantes pueden aprender a elaborar artesanías tradicionales llaneras, como hamacas y sombreros.'},
            { tipo: 'texto', contenido: 'Exposiciones: Hay exposiciones sobre la historia y la cultura de la región de los Llanos Orientales.'},
            { tipo: 'texto', contenido: 'Comida: El festival presenta una variedad de comida tradicional llanera, como arepas, tamales y sancocho.'},
            { tipo: 'texto', contenido: 'Casanare Palpita 2023 (youtube.com)'}


          ],
          imagenes: ['palpita2.png','palpita3.png', 'palpita4.png','palpita5.png','palpita6.png','palpita7.png',],
          fondo: 'palpita1.png'
        }
      },
       {
        titulo: 'Joropo Fest',
        imagen: 'fest.jpg',
        texto: 'Yopal - Casanare',
        detalle: {
          titulo: 'Joropo Fest',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción'},
            { tipo: 'texto', contenido: 'La esencia de la llaneridad trasciende sucesos históricos, arraigándose en aspectos sociológicos y biológicos. Es una amalgama de elementos que convergen para formar la identidad simbólica de la cultura llanera.  En este contexto, el lenguaje, arquetipos culturales arraigados, valores cotidianos, costumbres comunitarias y quehacer diario reflejan la realidad regional y dan forma a la estructura mental enriqueciendo la región.' },
            { tipo: 'texto', contenido: 'En este contexto cultural surge una iniciativa significativa: Joropo Fest. Esta propuesta busca fortalecer no solo el tejido cultural, sino también la economía creativa regional. Con un llamado a todos los rincones del país, Joropo Fest es un vehículo que permite impregnarse del arte, la creatividad y el talento intrínseco a la llaneridad.  Durante tres días repletos de significado, el festival se convierte en un epicentro de cultura, inspiración, creatividad y aprendizaje, brindando una oportunidad única de sumergirse en la cultura llanera.'},
            { tipo: 'texto', contenido: 'La agenda de Joropo Fest es un abanico diverso y enriquecedor con conferencias y conversatorios, para el intercambio de ideas y la exploración de nuevas perspectivas. Los talleres permiten a los asistentes adentrarse en las habilidades artísticas y artesanales que definen la región. Las muestras culturales y empresariales son una ventana que muestra el ingenio y la inventiva de la comunidad local.'},
            { tipo: 'texto', contenido: 'En cada rincón del festival se puede encontrar un reflejo de la riqueza cultural y creativa de la región. Desde las artesanías que narran historias ancestrales hasta la fotografía, escultura y pintura que capturan la esencia llanera en cada trazo y captura. La gastronomía despierta los sentidos y permite saborear siglos de tradición. La moda, el turismo de naturaleza, el baile y la música se combinan para crear una sinfonía de tradición y contemporaneidad que define la identidad de la cultura llanera.'},
            { tipo: 'texto', contenido: 'El festival honra a destacados personalidades con el reconocimiento “Corocora Cultural y Creativa”. Este homenaje es un tributo merecido a aquellas personas que, a través de su dedicación artística, han logrado no solo posicionar, sino también consolidar diversas facetas de la cultura llanera en los escenarios nacionales e internacionales. Su labor ha enriquecido la herencia cultural y ha permitido que la llaneridad trascienda fronteras, resonando en corazones de todas partes del mundo.'},
            
          ],
          imagenes: ['joropo3.png','joropo2.png', 'joropo4.png'],
          fondo: 'joropo1.png'
        }
      },
       {
        titulo: 'La Copa América De Coleo',
        imagen: 'copa.jpg',
        texto: 'Yopal - Casanare',
        detalle: {
          titulo: 'La Copa América De Coleo',
          descripcion: [
            { tipo: 'subtitulo', contenido: 'Descripción' },
            { tipo: 'texto', contenido: 'Yopal, conocida como la “Capital mundial del llanero”, es el epicentro de múltiples manifestaciones culturales y especialmente del evento deportivo que fortalece la esencia llanera y magnifica el trabajo de las mujeres y hombres que montan a caballo.'},
            { tipo: 'texto', contenido:'En Noviembre de 2001, el mundo del coleo fue testigo del nacimiento de un certamen que marcó en dos la historia deportiva en Casanare: La realización de la primera Copa América de Coleo, se convertiría en la vitrina nacional e internacional para este sector del país.'},
            { tipo: 'texto', contenido:'Esta cita con el deporte criollo, se constituyó desde entonces por su nivel deportivo y la calidad de los competidores. En todo un reto para su fundador, Víctor Armando Ávila Suárez, un empresario casanareño que gracias a su entusiasmo y gallardía, cumplió el sueño de realizar la “Copa América de Coleo”'},
          ],
          imagenes: ['copa1.png','copa2.png','copa5.png', 'copa9.png','copa7.png','copa6.png','copa8.png','copa10.png'],
          fondo: 'copa3.png'
        }
      },

    ]
    // Agrega más categorías con objetos similares aquí
  };

  seleccionarCategoria() {
    this.cards = this.dataPorCategoria[this.selectedCategoria] || [];
    this.detalles = null;
  }

  selectedCard: any = null;
  verDetalles(card: any) {
    this.selectedCard = card;
    this.detalles = card.detalle;
  }

  cerrarDetalles() {
    this.detalles = null;
  }

  scrollCarrusel(direccion: 'left' | 'right') {
    const scrollAmount = 300;
    if (this.carrusel) {
      this.carrusel.nativeElement.scrollBy({
        left: direccion === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  }


}
