import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { OrdenCompraComponent } from './Components/orden-compra/orden-compra.component';
import { ClasificacionmaterialComponent } from './Components/clasificacionmaterial/clasificacionmaterial.component';
import { GlobalserviceService } from './services/globalservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdenCompraComponent,   
    ClasificacionmaterialComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    APP_ROUTING
  ],
  providers: [GlobalserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
