import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coplas',
  imports: [CommonModule,
    RouterModule,
  ],
  templateUrl: './coplas.component.html',
  styleUrls: ['./coplas.component.css']
})
export class CoplasComponent {
  activeTab:string ='cultura';

  setActive(tab:string){
    this.activeTab=tab;
  }
  
  verMas(){
    alert('aqui podras encontra mas informacion')
  }
}
