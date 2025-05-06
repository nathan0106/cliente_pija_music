import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'; import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-notificaciones',
  standalone: true,
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
    RouterModule 

  ],
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})
export class NotificacionesComponent {
  notificaciones = [
    {
      label: 'tendencia de hace unas horas',
      mensaje: 'Lo más escuchado del mes de junio.',
      tiempo: '10 minutos',
      tipo: 'alerta'
    },
    {
      label: 'actualización del módulo de música',
      mensaje: 'Se agregaron nuevas canciones al módulo de música.',
      tiempo: '1 semana',
      tipo: 'alerta'
    },
    {
      label: 'Nuevas rutas',
      mensaje: 'Disfruta de nuevas rutas para compartir en familia.',
      tiempo: null,
      tipo: 'alerta'
    },
    {
      label: 'Sumérgete en la cultura',
      mensaje: 'Descubre variedad de información sobre el llano.',
      tiempo: '20/06/24',
      tipo: 'alerta'
    },
    {
      label: 'Actualización del módulo de cultura',
      mensaje: 'Se agregó más información al apartado de coleo.',
      tiempo: '05/06/24',
      tipo: 'alerta'
    },
    {
      label: 'Actualización del módulo de danza',
      mensaje: 'Interactúa para conocer más sobre danza llanera.',
      tiempo: '25/05/24',
      tipo: 'alerta'
    },
    {
      label: 'Sistema',
      mensaje: 'Se ha restablecido correctamente la contraseña…',
      tiempo: null,
      tipo: 'sistema'
    },
    {
      label: 'Sistema',
      mensaje: 'Su cuenta fue creada con éxito, continúa disfrutando…',
      tiempo: '12/04/24',
      tipo: 'sistema'
    },
    {
      label: 'Sistema',
      mensaje: 'Su número de celular se asoció a la cuenta correcta…',
      tiempo: '11/04/24',
      tipo: 'sistema'
    },
    {
      label: 'Sistema',
      mensaje: 'Se envió un código de verificación a su correo…',
      tiempo: '11/04/24',
      tipo: 'sistema'
    }
  ];
}

