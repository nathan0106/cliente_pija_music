import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificacionesadministrador',
  standalone: true,
  imports: [
    CommonModule ,

  ],
  templateUrl: './notificacionesadministrador.component.html',
  styleUrl: './notificacionesadministrador.component.css'
})
export class NotificacionesadministradorComponent {
  // Variable para almacenar el tipo de filtro seleccionado
  tipoSeleccionado: string = 'todos';

  notificacionesAdmin = [
    { id: 1, mensaje: "Nuevo usuario registrado.", tipo: 'usuario', fecha: new Date() },
    { id: 2, mensaje: "Nuevo contenido subido: Canción 'Amor Eterno'", tipo: 'contenido', fecha: new Date() },
    { id: 3, mensaje: "Nuevo reporte de actividad de usuario.", tipo: 'usuario', fecha: new Date() },
    { id: 4, mensaje: "Mantenimiento programado: servidor inactivo desde las 2:00 AM", tipo: 'sistema', fecha: new Date() },
    { id: 5, mensaje: "Nuevo evento cultural agregado: Festival de Música", tipo: 'evento', fecha: new Date() },
    { id: 6, mensaje: "Acceso no autorizado detectado en la cuenta de administrador", tipo: 'seguridad', fecha: new Date() },
  ];

  // Notificaciones filtradas según el tipo seleccionado
  notificacionesFiltradas = [...this.notificacionesAdmin];

  // Método para filtrar las notificaciones
  filtrarNotificaciones(tipo: string) {
    this.tipoSeleccionado = tipo;  // Actualizamos el tipo seleccionado
    if (tipo === 'todos') {
      this.notificacionesFiltradas = [...this.notificacionesAdmin];  // Muestra todas las notificaciones
    } else {
      this.notificacionesFiltradas = this.notificacionesAdmin.filter(notif => notif.tipo === tipo);
    }
  }

  // Método para eliminar una notificación
  eliminarNotificacion(id: number) {
    this.notificacionesAdmin = this.notificacionesAdmin.filter(notif => notif.id !== id);
    this.filtrarNotificaciones('todos');  // Después de eliminar, mostrar todas las notificaciones
  }
}