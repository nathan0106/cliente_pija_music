import { bootstrapApplication } from '@angular/platform-browser';
import { LoginComponent } from './app/pages/usuario/registro/login/login.component';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RegisterComponent } from './app/pages/usuario/registro/register/register.component';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { ColeoComponent } from './app/pages/usuario/cultura/coleo/coleo.component';
import { CoplasComponent } from './app/pages/usuario/cultura/coplas/coplas.component';
import { DanzaComponent } from './app/pages/usuario/cultura/danza/danza.component';
import { CotizaComponent } from './app/pages/usuario/cultura/cotiza/cotiza.component';
import { InstrumentosComponent } from './app/pages/usuario/cultura/instrumentos/instrumentos.component';
import { TrajesTipicosComponent } from './app/pages/usuario/cultura/trajes-tipicos/trajes-tipicos.component';
import { BuscarComponent } from './app/pages/usuario/musica/buscar/buscar.component';
import { FavoritosComponent } from './app/pages/usuario/musica/favoritos/favoritos.component';
import { NotificacionesComponent } from './app/pages/usuario/musica/notificaciones/notificaciones.component';
import { PlaylistComponent } from './app/pages/usuario/musica/playlist/playlist.component';
import { ActividadFamiliarComponent } from './app/pages/usuario/turismo/actividad-familiar/actividad-familiar.component';
import { ComidasTipicasComponent } from './app/pages/usuario/turismo/comidas-tipicas/comidas-tipicas.component';
import { EventosCulturalesComponent } from './app/pages/usuario/turismo/eventos-culturales/eventos-culturales.component';
import { LugaresHistoricosComponent } from './app/pages/usuario/turismo/lugares-historicos/lugares-historicos.component';
import { SenderismoComponent } from './app/pages/usuario/turismo/senderismo/senderismo.component';
import { ContrasenaComponent } from './app/pages/usuario/registro/contrasena/contrasena.component';
import { CodigoComponent } from './app/pages/usuario/registro/codigo/codigo.component';
import { NuevacontrasenaComponent } from './app/pages/usuario/registro/nuevacontrasena/nuevacontrasena.component';
import { PoliticasComponent } from './app/pages/usuario/registro/politicas/politicas.component';
import { DashboardMusicaComponent } from './app/pages/usuario/musica/dashboard-musica/dashboard-musica.component';
import { MenuCarruselComponent } from './app/pages/usuario/musica/menu-carrusel/menu-carrusel.component';
import { PersonalizarComponent } from './app/pages/usuario/musica/personalizar/personalizar.component';
import { LoginadministradorComponent } from './app/pages/administrador/loginadministrador/loginadministrador.component';
import { RegisteradministradorComponent } from './app/pages/administrador/registeradministrador/registeradministrador.component';
import { DashboardadministradorComponent } from './app/pages/administrador/dashboardadministrador/dashboardadministrador.component';
import { MenuadministradorComponent } from './app/pages/administrador/menuadministrador/menuadministrador.component';
import { NotificacionesadministradorComponent } from './app/pages/administrador/notificacionesadministrador/notificacionesadministrador.component';
import { ArtistasdministradorComponent } from './app/pages/administrador/artistasdministrador/artistasdministrador.component';
import { CancionesadministradorComponent } from './app/pages/administrador/cancionesadministrador/cancionesadministrador.component';
import { EstilomusicaladministradorComponent } from './app/pages/administrador/estilomusicaladministrador/estilomusicaladministrador.component';




bootstrapApplication(AppComponent,{
    providers:[
        provideRouter([
            //registro
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {path: 'contraseña', component: ContrasenaComponent},
            {path: 'codigo', component: CodigoComponent},
            {path: 'nuevacontraseña', component: NuevacontrasenaComponent},
            {path: 'politicas', component: PoliticasComponent },

            //Cultura
            { path: 'coleo', component: ColeoComponent},
            {path: 'coplas', component: CoplasComponent},
            {path: 'cotiza', component: CotizaComponent},
            {path: 'danza', component: DanzaComponent},
            {path: 'instrumentos', component: InstrumentosComponent},
            {path: 'trajes', component: TrajesTipicosComponent},

            //Musica
            { path: 'dashboardmusica', component:DashboardMusicaComponent,
                children:[

            {
                path: 'buscar', component: BuscarComponent
            },
            {
                path: 'favoritos', component: FavoritosComponent
            },
            {
                path: 'notificaciones', component: NotificacionesComponent
            },
            {
                path: 'playlist', component: PlaylistComponent
            },
            {
                path: 'menu', component: MenuCarruselComponent
            },
            {
                path: 'personalizar', component: PersonalizarComponent  
            },
           
             ],

            },

            //administradorgeneral
            {path:'dashboardadministrador', component:DashboardadministradorComponent,
                children:[
            {
                path: 'menuad', component:MenuadministradorComponent

            },
            {
                path: 'notificacionesadministrador', component:NotificacionesadministradorComponent
            },
            {
                path: 'artista', component: ArtistasdministradorComponent
            },
            {
                path:'canciones', component: CancionesadministradorComponent
            },
             {
                path: 'estilomusical', component: EstilomusicaladministradorComponent
            },

             ],
            },

            //turismo
            {path: 'familiar', component: ActividadFamiliarComponent},
            {path: 'comida', component: ComidasTipicasComponent},
            {path: 'evento', component: EventosCulturalesComponent},
            {path: 'historia', component: LugaresHistoricosComponent},
            {path: 'senderismo', component: SenderismoComponent},


            //administrador
          
            {
                path: 'loginad', component: LoginadministradorComponent
            },
            {
                path: 'registerad', component: RegisteradministradorComponent
            },
         

            


          ]),
          provideHttpClient(),
        provideAnimations()
    ]
}).catch(err => console.error(err));