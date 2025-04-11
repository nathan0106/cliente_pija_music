import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
<<<<<<< HEAD
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { MenuPrincipalComponent } from './pages/usuario/musica/menu-principal/menu-principal.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';

=======
import { PoliticasComponent } from './pages/usuario/registro/politicas/politicas.component';
import { CodigoComponent } from './pages/usuario/registro/codigo/codigo.component';
>>>>>>> 5e2f7db0545fc00e9adc5b11720bdfb804c2647a

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  { path: 'contrasena', component: ContrasenaComponent }, // <- corregido
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  {path: 'registro', component: RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Página de inicio por defecto
  { path: '**', redirectTo: '/login' } // Página no encontrada

=======
  { path: 'contraseña', component: ContrasenaComponent},
  { path: 'politicas', component: PoliticasComponent },
  { path: 'codigo', component: CodigoComponent}
>>>>>>> 5e2f7db0545fc00e9adc5b11720bdfb804c2647a
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
