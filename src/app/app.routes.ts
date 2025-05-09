import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { SenderismoComponent } from './pages/usuario/turismo/senderismo/senderismo.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';

import { PoliticasComponent } from './pages/usuario/registro/politicas/politicas.component';
import { CodigoComponent } from './pages/usuario/registro/codigo/codigo.component';
import { NuevacontrasenaComponent } from './pages/usuario/registro/nuevacontrasena/nuevacontrasena.component';
import { LugarcardComponent } from './pages/usuario/turismo/lugarcard/lugarcard.component';
import { LugarinformacionComponent } from './pages/usuario/turismo/lugarinformacion/lugarinformacion.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contraseña', component: ContrasenaComponent},
  { path: 'senderismo', component: SenderismoComponent},  

  { path: 'politicas', component: PoliticasComponent },
  { path: 'codigo', component: CodigoComponent},
  { path: 'register', component: RegisterComponent },
  { path: 'nuevacontraseña', component: NuevacontrasenaComponent },
  { path: 'lugares/:tipo', component: LugarcardComponent },
  { path: 'lugar/:id', component: LugarinformacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
