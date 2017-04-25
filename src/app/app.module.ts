import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { OrdenCompraComponent } from './Components/orden-compra/orden-compra.component';
import { ClasificacionArticuloComponent } from './Components/clasificacion-articulo/clasificacion-articulo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdenCompraComponent,
    ClasificacionArticuloComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
