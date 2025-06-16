import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { OnInit } from '@angular/core';
import { ApiService } from '../../../../../services/api.service';
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
  constructor(private router:Router,private route:ActivatedRoute,private apiservice:ApiService){}


  currenIndex = 3;
  instrumento:String='';

  
  selectedInfo:{title: string, description: string, origen:string ,llagada:string,title1:string,title2:string }|null=null  
  informacion_instrumentos={
    instrumentos:""
    
  }
  cards = [
    {
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',

    },
    {
      
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',


    },
    {
      
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',

    },
    {
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',
    },
    {
      
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',
    },
    {
      
      image: '',
      title_button:'',
      detailTitle:'',
      detailDescription:'',
      title1:'',
      origen:'',
      title2:'',
      llagada:'',
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

 this.apiservice.getData('Tipo_Cultura?query=Nombre:Instrumentos').subscribe(
  (repuesta)=>{

    console.log('lo que llega del get',repuesta['Data'][0]['Informacion'])
    let infoEnString = repuesta['Data'][0]['Informacion']
    //console.log("dnsdjbsd",infoEnString)
    let infoParseada = JSON.parse(infoEnString);
    this.informacion_instrumentos.instrumentos= infoParseada.detalles[0].descripcion

  },
  (error)=>{
    alert('error al consultar tipo cultura')

  }
  )

  this.apiservice.getData('Cultura?query=IdTipoCultura.Id:39').subscribe(
  (respuesta)=>{

    const data = respuesta.Data;

    console.log('lo que llega del get cuktura',respuesta['Data'])
    const informaciones = (respuesta.Data as any[]).map(item => item.Informacion);
     console.log('Campos Informacion:', informaciones);
      const informacionesParseadas = informaciones.map(info => {
      try {
        return JSON.parse(info);
      } catch (e) {
        console.error('Error al parsear Informacion:', info, e);
        return null;
      }
    });
    for (let i = 0; i < informacionesParseadas.length; i++) {
    console.log(informacionesParseadas[i].titulo);
    this.cards[i].title_button=informacionesParseadas[i].titulo
    this.cards[i].image=informacionesParseadas[i].imagen
    console.log('dato secciones', informacionesParseadas[i].secciones[0])
    this.cards[i].detailTitle=informacionesParseadas[i].secciones[0].subtitulo
    this.cards[i].detailDescription=informacionesParseadas[i].secciones[0].descripcion
    this.cards[i].title1=informacionesParseadas[i].secciones[1].subtitulo
    this.cards[i].origen=informacionesParseadas[i].secciones[1].descripcion
    this.cards[i].title2=informacionesParseadas[i].secciones[2].subtitulo
    this.cards[i].llagada=informacionesParseadas[i].secciones[2].descripcion
    
    
  }
  },
  (error)=>{
    alert('error al consultar tipo cultura')

  }
 )
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




