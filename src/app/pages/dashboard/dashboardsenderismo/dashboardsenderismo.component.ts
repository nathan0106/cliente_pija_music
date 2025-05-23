import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';


@Component({
  selector: 'app-dashboardsenderismo',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './dashboardsenderismo.component.html',
  styleUrl: './dashboardsenderismo.component.css'
})
export class DashboardsenderismoComponent {

  constructor (private router: Router){}

  verLugaresPorTipo(tipo: string) {
    this.router.navigate(['/dashboardturismo/lugares', tipo]); // Ej: /lugares/senderismo
}

  changeCategory(category: string) {
    console.log(`Mostrando categoría: ${category}`);
  }
}
