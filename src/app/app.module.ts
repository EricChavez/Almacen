import { ProductoEditaComponent } from './Components/producto/producto.edita.component';
import { TipounidadNuevoComponent } from './Components/tipounidad/tipounidad.nuevo.component';
import { TipounidadService } from './services/tipounidad.service';
import { UbicacionEditaComponent } from './Components/ubicacion/ubicacion.edita.component';
import { UbicacionNuevaComponent } from './Components/ubicacion/ubicacion.nueva.component';
import { ProductoService } from './services/producto.service';
import { UbicacionService } from './services/ubicacion.service';
import { TipoventaEditaComponent } from './Components/tipoventa/tipoventa.edita.component';

import { BrowserModule } from '@angular/platform-browser';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { APP_ROUTING } from './app.routes';
import { OrdenCompraComponent } from './Components/orden-compra/orden-compra.component';

import { Globalservice } from './services/globalservice.service';
import { CategoriaService } from './services/categoria.service';
import { TipoventaService } from './services/tipoventa.service';
import { DepartamentoService } from './services/departemento.service';
import { CategoriaComponent } from './Components/categoria/categoria.component';
import { CategoriaNuevaComponent } from './Components/categoria/categoria.nueva.component';
import { CategoriaEditaComponent } from './Components/categoria/categoria.edita.component';
import { TopnavbarComponent } from './Components/topnavbar/topnavbar.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { BlockUIModule } from 'ng-block-ui';
import { DepartamentoComponent } from './Components/departamento/departamento.component';
import { DepartamentoNuevoComponent } from './Components/departamento/departamento.nuevo.component';
import { DepartamentoEditaComponent } from './Components/departamento/departamento.edita.component';
import { TipoventaComponent } from './Components/tipoventa/tipoventa.component';
import { TipoventaNuevoComponent } from './Components/tipoventa/tipoventa.nuevo.component';
import { ProveedorComponent } from './Components/proveedor/proveedor.component';
import { ProductoComponent } from './Components/producto/producto.component';
import { ProductoNuevoComponent } from './Components/producto/producto.nuevo.component';
import { UbicacionComponent } from './Components/ubicacion/ubicacion.component';
import { TipounidadComponent } from './Components/tipounidad/tipounidad.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrdenCompraComponent,
    CategoriaComponent,
    TopnavbarComponent,
    MenuComponent,
    FooterComponent,
    CategoriaNuevaComponent,
    CategoriaEditaComponent,
    DepartamentoComponent,
    DepartamentoNuevoComponent,
    DepartamentoEditaComponent,
    TipoventaComponent,
    TipoventaNuevoComponent,
    TipoventaEditaComponent,
    ProveedorComponent,
    ProductoComponent,
    UbicacionComponent,
    UbicacionNuevaComponent,
    UbicacionEditaComponent,
    TipounidadComponent,
    TipounidadNuevoComponent,
    ProductoNuevoComponent,
    ProductoEditaComponent
  ],
  imports: [
    SimpleNotificationsModule.forRoot(),
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BlockUIModule,
    APP_ROUTING

  ],
  providers: [
    Globalservice,
    CategoriaService,
    DepartamentoService,
    TipoventaService,
    UbicacionService,
    ProductoService,
    TipounidadService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
