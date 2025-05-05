import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { SenderismoComponent } from './pages/usuario/turismo/senderismo/senderismo.component';
import { RegisterComponent } from './pages/usuario/registro/register/register.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contraseña', component: ContrasenaComponent},
  { path: 'senderismo', component: SenderismoComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
