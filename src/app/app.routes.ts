import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { NotificacionesComponent } from './notificaciones/notificaciones.component';
import { MenuPrincipalComponent } from './pages/usuario/musica/menu-principal/menu-principal.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contrasena', component: ContrasenaComponent }, // <- corregido
  { path: 'notificaciones', component: NotificacionesComponent },
  { path: 'menu-principal', component: MenuPrincipalComponent },
  {path: 'registro', component: RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Página de inicio por defecto
  { path: '**', redirectTo: '/login' } // Página no encontrada

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
