import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { CardCaroselComponent } from './pages/usuario/cultura/instrumentos/card-carosel/card-carosel.component';
import { ColeoComponent } from './pages/usuario/cultura/coleo/coleo.component';
import { InstrumentosComponent } from './pages/usuario/cultura/instrumentos/instrumentos.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contraseña', component: ContrasenaComponent},
  {path:'card',component:CardCaroselComponent},
  {path:'instrumentos/:nombre',component:InstrumentosComponent},
  {path:'coleo',component:ColeoComponent},
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
