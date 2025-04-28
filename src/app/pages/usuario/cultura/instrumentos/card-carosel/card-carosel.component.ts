import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card-carosel',
  imports: [MatCardModule],
  templateUrl: './card-carosel.component.html',
  styleUrl: './card-carosel.component.css'
})
export class CardCaroselComponent {

  currenIndex=0;
  sectionDescription='encontrar toda la infomacion adecuada de la cultura '
  sectionTitle='instrumentos'
  selectadInfo:{title:string,description:string}
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
    this.selectedInfo={
      title: card.detailTitle,
      description: card.detailDescription
    }
  }
  cerrarDetalle(){
    this.selectedInfo=null;
  }
}
