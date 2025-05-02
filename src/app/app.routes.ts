import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/usuario/registro/login/login.component';
import { ContrasenaComponent } from './pages/usuario/registro/contrasena/contrasena.component';
import { InstrumentosComponent } from './pages/usuario/cultura/instrumentos/instrumentos.component';
import { DashboardComponent } from './pages/usuario/cultura/instrumentos/deshoard/deshoard.component';
import { CoplasComponent } from './pages/usuario/cultura/coplas/coplas.component';
import { ColeoComponent } from './pages/usuario/cultura/coleo/coleo.component';
import { TrajesTipicosComponent } from './pages/usuario/cultura/trajes-tipicos/trajes-tipicos.component';
import { CotizaComponent } from './pages/usuario/cultura/cotiza/cotiza.component';
import { DanzaComponent } from './pages/usuario/cultura/danza/danza.component';
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'contraseña', component: ContrasenaComponent},
  {path:'instrumentos',component:InstrumentosComponent},
  {
    path:'deshoard',component:DashboardComponent,
    children:[
      {path:'instrumentos',component:InstrumentosComponent},
      {path:'coplas',component:CoplasComponent},
      {path:'coleo',component:ColeoComponent},
      {path:'trajes tipicos',component:TrajesTipicosComponent},
      {path:'cotiza',component:CotizaComponent},
      {path:'danza',component:DanzaComponent}
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
