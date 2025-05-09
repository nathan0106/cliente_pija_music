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
      }
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
