import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { MenuPrincipalComponent } from './pages/usuario/musica/menu-principal/menu-principal.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';
import { PoliticasComponent } from './pages/usuario/registro/politicas/politicas.component';
import { CodigoComponent } from './pages/usuario/registro/codigo/codigo.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'politicas', component: PoliticasComponent },
  { path: 'codigo', component: CodigoComponent},
  {path: 'registro', component: RegisterComponent},
  { path: 'contrasena', component: ContrasenaComponent }, // <- corregido
  { path: 'menu-principal', component: MenuPrincipalComponent },
  
  
 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
