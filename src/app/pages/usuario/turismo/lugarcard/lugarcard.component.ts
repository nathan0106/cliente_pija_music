import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon'; 


interface Lugar {
  id: number;
  nombre: string;
  direccion: string;
  imagen: string;
  ciudad: string;
  departamento: string;
  fecha: string
  
}

@Component({
  selector: 'app-lugarcard',
  standalone: true,
  imports: [CommonModule, MatCardModule , MatIconModule],
  templateUrl: './lugarcard.component.html',
  styleUrl: './lugarcard.component.css'
})
export class LugarcardComponent {
  lugares: Lugar[] = [];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit() {
    const tipo = this.route.snapshot.paramMap.get('tipo');
    if (tipo) {
      this.apiService.getData('/lugares/tipoLugar').subscribe(data => {
        this.lugares = data;
      });
    }
  }

  verDetalle(id: number) {
    this.router.navigate(['/dashboard/lugar', id]);
  }
}
