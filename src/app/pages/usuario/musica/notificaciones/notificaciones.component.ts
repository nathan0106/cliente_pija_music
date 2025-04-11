import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notificaciones',
  imports:[
    CommonModule
  ],
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notificaciones = [
    { mensaje: 'Tienes una nueva solicitud de amistad 🎉', tiempo: 'hace 2 minutos' },
    { mensaje: 'Tu publicación ha sido comentada 💬', tiempo: 'hace 10 minutos' },
    { mensaje: 'Has sido mencionado en un post 📢', tiempo: 'hace 1 hora' }
  ];
}

