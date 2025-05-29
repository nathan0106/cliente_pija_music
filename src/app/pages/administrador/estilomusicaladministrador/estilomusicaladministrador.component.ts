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
  selector: 'app-estilomusicaladministrador',
  standalone: true,
  imports: [
    CommonModule ,
    FormsModule,
    AlertComponent
  ],
  templateUrl: './estilomusicaladministrador.component.html',
  styleUrls: ['./estilomusicaladministrador.component.css']
})
export class EstilomusicaladministradorComponent {
   constructor(private apiService: ApiService , private dialog: MatDialog) {}

   
    @ViewChild('alertRef') alertComponent!: AlertComponent;

  estilos: any = [];

  estiloNuevo = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };

  estiloJson_post = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };

  
 guardarEstilo() {

   // ✅ Validación de campos requeridos
  if (
    !this.estiloNuevo.NombreGenero.trim() ||
    !this.estiloNuevo.InstrumentosPrincipales.trim() ||
    !this.estiloNuevo.DescripcionMusical.trim()
  ) {
    if (this.alertComponent) {
      this.alertComponent.show('Por favor completa todos los campos antes de guardar.');
    }
    return; // Detener ejecución si faltan campos
  }


  this.estilos.push({ ...this.estiloNuevo });

  this.estiloJson_post = {
    NombreGenero: this.estiloNuevo.NombreGenero,
    InstrumentosPrincipales: this.estiloNuevo.InstrumentosPrincipales,
    DescripcionMusical: this.estiloNuevo.DescripcionMusical
  };

    this.estiloNuevo = {
    NombreGenero: '',
    InstrumentosPrincipales: '',
    DescripcionMusical: ''
  };
  let estiloNuevo_json = JSON.stringify(this.estiloJson_post);

 console.log('estilomusical  a enviar:', estiloNuevo_json);

this.apiService.postData('Estilo_Musical', estiloNuevo_json).subscribe(
  (respuesta) => {
    console.log('estilomusical creado', respuesta);
     this.dialog.open(dialogestilomusicalad);('Estilo musical creado exitosamente');
  },
  (error) => {
  console.error('Error al crear el estilomusical ', error);
  this.alertComponent.show('Error al crear el estilomusical ');
  }
  );
 }
}


import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatDialogClose } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogestilomusicalad',
  standalone: true,
  imports: [
     MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  templateUrl: './dialogestilomusicalad.html',
  styleUrls: ['./dialogestilomusicalad.css']
})
export class dialogestilomusicalad {
  constructor(
    private dialogRef: MatDialogRef<dialogestilomusicalad>,
    private router: Router
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
