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
import { CardCaroselComponent } from './app/pages/usuario/cultura/instrumentos/card-carosel/card-carosel.component';
import { DashboardComponent } from './app/pages/usuario/cultura/instrumentos/deshoard/deshoard.component';
import { DashboardMusicaComponent } from './app/pages/usuario/musica/dashboard-musica/dashboard-musica.component';
import { MenuCarruselComponent } from './app/pages/usuario/musica/menu-carrusel/menu-carrusel.component';
import { PersonalizarComponent } from './app/pages/usuario/musica/personalizar/personalizar.component';
import { LoginadministradorComponent } from './app/pages/administrador/loginadministrador/loginadministrador.component';
import { RegisteradministradorComponent } from './app/pages/administrador/registeradministrador/registeradministrador.component';
import { DashboardadministradorComponent } from './app/pages/administrador/dashboardadministrador/dashboardadministrador.component';
<<<<<<< HEAD
import { MenuadministradorComponent } from './app/pages/administrador/menuadministrador/menuadministrador.component';
import { FavoritosadministradorComponent } from './app/pages/administrador/favoritosadministrador/favoritosadministrador.component';
import { PlaylistadministradorComponent } from './app/pages/administrador/playlistadministrador/playlistadministrador.component';
import { NotificacionesadministradorComponent } from './app/pages/administrador/notificacionesadministrador/notificacionesadministrador.component';
import { AutorCoplasAdminComponent } from './app/pages/administrador/autor-coplas-admin/autor-coplas-admin.component';
import { CoplasAdminComponent } from './app/pages/administrador/coplas-admin/coplas-admin.component';
import { TipoCulturaAdminComponent } from './app/pages/administrador/tipo-cultura-admin/tipo-cultura-admin.component';
import { CulturaAdminComponent } from './app/pages/administrador/cultura-admin/cultura-admin.component';
=======
import { ArtistasdministradorComponent } from './app/pages/administrador/artistasdministrador/artistasdministrador.component';
import { CancionesadministradorComponent } from './app/pages/administrador/cancionesadministrador/cancionesadministrador.component';
import { EstilomusicaladministradorComponent } from './app/pages/administrador/estilomusicaladministrador/estilomusicaladministrador.component';
import { CodigoadComponent } from './app/pages/administrador/codigoad/codigoad.component';
import { ContrasenaadComponent } from './app/pages/administrador/contrasenaad/contrasenaad.component';
import { NuevacontrasenaadComponent } from './app/pages/administrador/nuevacontrasenaad/nuevacontrasenaad.component';
import { InicioComponent } from './app/pages/inicio/inicio.component';



>>>>>>> ae65fcfdfb1400c1ce19e33168f177f4a4d61b18

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
           
            {path:'card',component:CardCaroselComponent },
            {path:'deshboard',component:DashboardComponent,
                children: [
                    {
                        path:'instrumentos',component: InstrumentosComponent
                        
                    },
                    {
                        path:'coplas',component:CoplasComponent
                    },
                    {
                        path:'coleo',component:ColeoComponent
                    },
                    {
                        path:'trajes-tipicos',component:TrajesTipicosComponent
                    },
                    {
                        path:'cotiza',component:CotizaComponent
                    },
                    {
                        path:'danza',component:DanzaComponent
                    },
                    {
                        path:'card',component:CardCaroselComponent
                    },
                    
                ]
            },

            //Musica

        
            {path: 'buscar', component: BuscarComponent},
            {path: 'favoritos', component: FavoritosComponent},
            {path: 'notificaciones', component: NotificacionesComponent},
            {path: 'playlist', component: PlaylistComponent},

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

                path: 'artista', component: ArtistasdministradorComponent
            },
            {
                path:'canciones', component: CancionesadministradorComponent
            },
             {
                path: 'estilomusical', component: EstilomusicaladministradorComponent
            },
                        {
                path: 'autorcoplasad', component:AutorCoplasAdminComponent
            },
                        {
                path: 'coplasad', component:CoplasAdminComponent
            },
                        {
                path: 'tipoculturaad', component:TipoCulturaAdminComponent
            },
                        {
                path: 'culturaad', component:CulturaAdminComponent
            },

             ],
            },


            //turismo
            {path: 'familiar', component: ActividadFamiliarComponent},
            {path: 'comida', component: ComidasTipicasComponent},
            {path: 'evento', component: EventosCulturalesComponent},
            {path: 'historia', component: LugaresHistoricosComponent},
            {path: 'senderismo', component: SenderismoComponent},


            //administrador login
          
            {
                path: 'loginad', component: LoginadministradorComponent
            },
            {
                path: 'registerad', component: RegisteradministradorComponent
            },
            {
                path: 'codigoad', component: CodigoadComponent
            },
            {
                path: 'contraseñad', component: ContrasenaadComponent
            },
            {
                path: 'nuevacontraseñaad', component: NuevacontrasenaadComponent
            },
              {
                path: 'inicio', component: InicioComponent
            },
         

            


          ]),
          provideHttpClient(),
        provideAnimations()
    ]
}).catch(err => console.error(err));