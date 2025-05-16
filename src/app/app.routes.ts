import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { MenuCarruselComponent } from './pages/usuario/musica/menu-carrusel/menu-carrusel.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';
import { PoliticasComponent } from './pages/usuario/registro/politicas/politicas.component';
import { CodigoComponent } from './pages/usuario/registro/codigo/codigo.component';
import { NotificacionesComponent } from './pages/usuario/musica/notificaciones/notificaciones.component';
import { PlaylistComponent } from './pages/usuario/musica/playlist/playlist.component';
import {BuscarComponent} from './pages/usuario/musica/buscar/buscar.component';
import { PersonalizarComponent } from './pages/usuario/musica/personalizar/personalizar.component';
import { DashboardMusicaComponent } from './pages/usuario/musica/dashboard-musica/dashboard-musica.component';
import { NuevacontrasenaComponent } from './pages/usuario/registro/nuevacontrasena/nuevacontrasena.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: '/musica', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'codigo', component: CodigoComponent},
  {path: 'registro', component: RegisterComponent},
  { path: 'contrasena', component: ContrasenaComponent }, 
  { path: 'menu', component: MenuCarruselComponent },
  {path: 'notificaciones', component: NotificacionesComponent}, 
  {path: 'playlist', component: PlaylistComponent},
  {path: 'buscar', component: BuscarComponent},
  {path: 'DashboardMusicaComponent', component: DashboardMusicaComponent},
  {path: 'PersonalizarComponent', component: PersonalizarComponent},
  { path: 'nuevacontraseña', component: NuevacontrasenaComponent }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
