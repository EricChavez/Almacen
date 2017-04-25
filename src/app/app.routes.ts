import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClasificacionmaterialComponent } from './Components/clasificacionmaterial/clasificacionmaterial.component';
const APP_ROUTES: Routes = [

    { path: 'clasificacionarticulo', component: ClasificacionmaterialComponent },
    { path: 'home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
