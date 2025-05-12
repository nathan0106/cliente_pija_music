import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';

import { PoliticasComponent } from './pages/usuario/registro/politicas/politicas.component';
import { CodigoComponent } from './pages/usuario/registro/codigo/codigo.component';
import { NuevacontrasenaComponent } from './pages/usuario/registro/nuevacontrasena/nuevacontrasena.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contraseña', component: ContrasenaComponent},  

  { path: 'politicas', component: PoliticasComponent },
  { path: 'codigo', component: CodigoComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'nuevacontraseña', component: NuevacontrasenaComponent },
];

@NgModule({
  imports: [
    AppRoutingModule, // donde están tus rutas
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
