import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClasificacionArticuloComponent } from './components/clasificacion-articulo/clasificacion-articulo.component';
const APP_ROUTES: Routes = [
   
       { path: 'home', component: HomeComponent },   
       { path: '**',pathMatch:'full' ,redirectTo:'home' }  
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
