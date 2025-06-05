import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../services/api.service';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AlertComponent } from '../alert/alert.component';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-cancionesadministrador',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  MatFormFieldModule, 
  MatInputModule, 
  FormsModule, 
  MatButtonModule,
  MatDialogModule,
  AlertComponent
  ],
  templateUrl: './cancionesadministrador.component.html',
  styleUrls: ['./cancionesadministrador.component.css']
})
export class CancionesadministradorComponent {
  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  @ViewChild('alertRef') alertComponent!: AlertComponent;

  artistas: any[] = [];
  estilos: any[] = [];
  canciones: any[] = [];

  cancionNueva = {
    titulo: '',
    duracion: '',
    link: '',
    artista: '',
    album: '',
    idEstilo: '',
    fechaLanzamiento: ''
  };

  cancionjsnpost = {
    TituloCancion: '',
    IdArtistas: { Id: 0 },
    Album: '',
    IdEstilo: { Id: 0 },
    Duracion: '',
    RutaArchivo: '',
    FechaLanzamiento: ''
  };

  guardarCancion() {

  // ✅ Validar campos vacíos
  if (
    !this.cancionNueva.titulo.trim() ||
    !this.cancionNueva.duracion.trim() ||
    !this.cancionNueva.link.trim() ||
    !this.cancionNueva.artista.trim() ||
    !this.cancionNueva.album.trim() ||
    !this.cancionNueva.idEstilo.trim() ||
    !this.cancionNueva.fechaLanzamiento.trim()
  ) {
    if (this.alertComponent) {
      this.alertComponent.show('Por favor completa todos los campos antes de guardar.');
    }
    return; // No continuar si hay campos vacíos
  }

    this.canciones.push({ ...this.cancionNueva });

    this.cancionjsnpost = {
      TituloCancion: this.cancionNueva.titulo,
      IdArtistas: { Id: Number(this.cancionNueva.artista) },
      Album: this.cancionNueva.album,
      IdEstilo: { Id: Number(this.cancionNueva.idEstilo) },
      Duracion: this.cancionNueva.duracion,
      RutaArchivo: this.cancionNueva.link,
      FechaLanzamiento: this.cancionNueva.fechaLanzamiento
    };

    const cancionNueva_json = JSON.stringify(this.cancionjsnpost);
    console.log('json', cancionNueva_json);

    this.apiService.postData('Canciones', cancionNueva_json).subscribe(
      (respuesta) => {
        console.log('Canción creada', respuesta);
        this.dialog.open(DialogCancionesad); // Abrir el diálogo correctamente
      },
      (error) => {
        console.error('Error al crear la canción', error);
        this.alertComponent.show('Error al crear la canción');
      }
    );

    this.cancionNueva = {
      titulo: '',
      duracion: '',
      link: '',
      artista: '',
      album: '',
      idEstilo: '',
      fechaLanzamiento: ''
    };
  }

  ngOnInit(): void {
    this.apiService.getData('Artista?limit=0').subscribe(
      (respuesta) => {
        this.artistas = respuesta['Data'];
      },
      (error) => {
        this.alertComponent.show('Error al consultar artistas');
      }
    );

    this.apiService.getData('Estilo_Musical?limit=0').subscribe(
      (respuesta) => {
        this.estilos = respuesta['Data'];
      },
      (error) => {
        this.alertComponent.show('Error al consultar estilos musicales');
      }
    );
  }
}




import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcancionesad',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './dialogcancionesad.html',
  styleUrls: ['./dialogcancionesad.css']
})
export class DialogCancionesad {
  constructor(
    private dialogRef: MatDialogRef<DialogCancionesad>,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
