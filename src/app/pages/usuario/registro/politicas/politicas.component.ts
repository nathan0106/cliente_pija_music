import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css']
})
export class PoliticasComponent {
  returnTo: string = 'login'; // por defecto

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      if (params['returnTo']) {
        this.returnTo = params['returnTo'];
      }
    });
  }

  aceptar() {
    this.router.navigate([`/${this.returnTo}`]);
  }
}
