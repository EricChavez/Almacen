import { TipoventaNuevoComponent } from './Components/tipoventa/tipoventa.nuevo.component.';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { CategoriaNuevaComponent } from './Components/categoria/categoria.nueva.component';
import { CategoriaEditaComponent } from './Components/categoria/categoria.edita.component';
import { DepartamentoComponent } from './Components/departamento/departamento.component';
import { DepartamentoNuevoComponent } from './Components/departamento/departamento.nuevo.component';
import { DepartamentoEditaComponent } from './Components/departamento/departamento.edita.component';
import { TipoventaComponent } from './Components/tipoventa/tipoventa.component';

const APP_ROUTES: Routes = [
    {
        path: 'home', component: HomeComponent,
        children: [
            { path: 'categoria', component: CategoriaComponent },
            { path: 'nuevacategoria', component: CategoriaNuevaComponent },
            { path: 'editacategoria/:id', component: CategoriaEditaComponent },
            { path: 'departamento', component: DepartamentoComponent },
            { path: 'nuevodepartamento', component: DepartamentoNuevoComponent },
            { path: 'editadepartamento/:id', component: DepartamentoEditaComponent },
            { path: 'tipoventa', component: TipoventaComponent },
            { path: 'nuevotipoventa', component: TipoventaNuevoComponent },
            { path: 'editatipoventa', component: TipoventaComponent }
        ]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
