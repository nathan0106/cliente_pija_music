import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/api.service';

interface Lugar {
  id: number;
  nombre: string;
  direccion: string;
  horario: string;
  descripcion: string;
  imagenes: string[];
}

@Component({
  selector: 'app-lugarinformacion',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lugarinformacion.component.html',
  styleUrl: './lugarinformacion.component.css'
})
export class LugarinformacionComponent {
  lugar!: Lugar;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getLugarPorId(+id).subscribe((data: any) => {
        this.lugar = data;
      });
    }
  }
}
