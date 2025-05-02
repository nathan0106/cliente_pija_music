import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-carosel',
  imports: [MatCardModule,
    CommonModule,
    MatButtonModule],
  templateUrl: './card-carosel.component.html',
  styleUrl: './card-carosel.component.css'
})
export class CardCaroselComponent {
  constructor(private router:Router){}


  currenIndex=0;

  sectionTitle = 'Sección destacada';
  sectionDescription = 'Explora los sitios turisticos de yopal';
  selectedInfo:{title: string, description: string}|null=null
  cards = [
    {
      title: 'Cuatro',
      image: 'cuatro.webp',
      title_button:'mas informacion',
      ruta: 'cuatro'
    },
    {
      title: 'Maracas',
      image: 'maracas.jpg',
      title_button:'mas informacion',
      ruta:'maracas'
    },
    {
      title: 'Mandolina',
      image: 'mandolina1.,.jpg',
      title_button:'mas informacion',
      ruta:'mandolina'
    },
    {
      title: 'bajo',
      image: 'bajo-1.jpg',
      title_button:'mas informacion',
      ruta:'bajo'
      
    },
    {
      title: 'bandola',
      image: 'banandola-1.jpg',
      title_button:'boron 4',
      ruta:'bandola'
    },
    {
      title: 'Card 6',
      image: 'https://picsum.photos/300/200?random=6',
      title_button:'boton 6',
      
    },
    {
      title: 'Card 7',
      image: 'https://picsum.photos/300/200?random=7',
      action: () => alert('Card 7 selecciona'),
      title_button:'boton7',
      detailTitle:'ruta1',
      detailDescription:'jonsndieonowqojr'
    },

  ]
goNext(){
  if (this.currenIndex< this.cards.length-1){
    this.currenIndex++;
  }
}
goPrevious(){
  if (this.currenIndex>0){
    this.currenIndex--;
  }
}
getTransform(){
  return `translateX(-${this.currenIndex*100}%)`
}
mostrarDetalle(card:any){
  this.router.navigate([card.ruta]);
console.log(card.ruta)
  }
}


