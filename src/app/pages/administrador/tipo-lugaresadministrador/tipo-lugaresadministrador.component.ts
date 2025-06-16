import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiCrudService } from '../../../services/api_crud.services';


@Component({
  selector: 'app-tipo-lugaresadministrador',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './tipo-lugaresadministrador.component.html',
  styleUrl: './tipo-lugaresadministrador.component.css'
})


export class TipoLugaresadministradorComponent {
    constructor(private apicrudService: ApiCrudService) { }

  // Modelo temporal para enviar nuevos tipos al backend 
  Json_Tipo_lugar: any = {
    "Nombre": "",
  }


  nuevoTipo: string = ''; // Modelo del input de nuevo tipo
  tiposLugar: { id: number, nombre: string, enEdicion?: boolean }[] = [];
  mensaje: string = '';
  tipoMensaje: 'exito' | 'error'  = 'exito';

   ngOnInit() {
   this.apicrudService.getData('Tipo_Lugares?limit=-1').subscribe((response) => {
    const data = response.Data;
    console.log("Respuesta del backend:", data);
    this.tiposLugar = data.map((item: any) => ({
      id: item.Id,
      nombre: item.Nombre
    }));
  });
}

  mostrarMensaje(texto: string, tipo: 'exito' | 'error') {
  this.mensaje = texto;
  this.tipoMensaje = tipo;

  // Ocultar mensaje después de 3 segundos
  setTimeout(() => {
    this.mensaje = '';
  }, 3000);
}


  
  agregarTipo() {
    const tipo = this.nuevoTipo.trim(); // Limpiamos espacios

    // Si no está vacío y no existe en la lista
    if (tipo && !this.tiposLugar.find(t => t.nombre === tipo)) {
      this.Json_Tipo_lugar.Nombre = this.nuevoTipo;
      this.apicrudService.postData('Tipo_Lugares', this.Json_Tipo_lugar).subscribe({
        next: (response) => {
          console.log('respuesta al crear:',response); //verifica que venga el ID
          
          this.tiposLugar.push({ id: response.Data.Id, nombre: tipo }); // guardas el id
          this.mostrarMensaje("Se creó el tipo lugar exitosamente.", 'exito');
        },
        error: (error) => {
          console.error('Error al crear tipo lugar:', error);
          this.mostrarMensaje("Hubo un error al crear el tipo lugar.", 'error');
        }
      });
       // Limpia el input
      this.nuevoTipo = '';
    }
  }

  eliminarTipo(index: number) {

  const tipo = this.tiposLugar[index]; // Obtenemos el objeto { id, nombre }

  // Usamos el ID del tipo para hacer la solicitud DELETE
  console.log("este es ek id del tipo a eliminar:", tipo.id);
  this.apicrudService.deleteData('Tipo_Lugares', tipo.id).subscribe({
    next: () => {
      // Eliminamos del arreglo local (UI) si la eliminación fue exitosa
      this.tiposLugar.splice(index, 1);
      this.mostrarMensaje("Tipo de lugar eliminado exitosamente.", 'exito');
    },
    error: (error) => {
      console.error('Error al eliminar tipo de lugar:', error);
      this.mostrarMensaje("Hubo un error al eliminar el tipo de lugar.", 'error');
    }
  });
}
activarEdicion(index: number) {
  this.tipoEditandoIndex = index;
  this.tipoEditandoNombre = this.tiposLugar[index].nombre;
}

tipoEditandoIndex: number | null = null;
tipoEditandoNombre: string = '';

guardarEdicion(index: number) {
  const tipo = this.tiposLugar[index];
  const payload = {
    Id: tipo.id,
    Nombre: this.tipoEditandoNombre.trim()
  };
  console.log('payload enviado:',payload)

  this.apicrudService.putData(`Tipo_Lugares/${tipo.id}`, payload).subscribe({
    next: () => {
      tipo.nombre = this.tipoEditandoNombre.trim();  // actualiza el nombre localmente
      tipo.enEdicion = false;
      this.tipoEditandoIndex = -1; // sale del modo edición
      this.mostrarMensaje("Tipo de lugar actualizado exitosamente.", 'exito');
    },
    error: (error) => {
      console.error('Error al actualizar tipo de lugar:', error);
      this.mostrarMensaje("Hubo un error al actualizar el tipo de lugar.", 'error');
    }
  });
}

cancelarEdicion() {
  this.tipoEditandoIndex = null;
  this.tipoEditandoNombre = '';
}
}

