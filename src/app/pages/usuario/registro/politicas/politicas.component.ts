import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-politicas',
  imports: [
  ],
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent {
  returnTo: string = 'login'; // por defecto

  constructor(private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.queryParams.subscribe(params => {
      if (params['returnTo']) {
        this.returnTo = params['returnTo'];
      }
    });
  }

  aceptar() {
    this.location.back(); // vuelve a la vista anterior sin redirigir
  }
}
