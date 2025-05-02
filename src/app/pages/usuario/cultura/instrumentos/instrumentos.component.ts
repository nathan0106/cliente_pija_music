import { Component } from '@angular/core';
import {MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { CardCaroselComponent } from './card-carosel/card-carosel.component';

@Component({
  selector: 'app-instrumentos ',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatButtonModule,
    CardCaroselComponent
  ],
  templateUrl: './instrumentos.component.html',
  styleUrl: './instrumentos.component.css'
})
export class InstrumentosComponent {

}
