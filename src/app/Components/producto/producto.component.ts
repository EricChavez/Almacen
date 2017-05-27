import { UbicacionService } from './../../services/ubicacion.service';
import { TipounidadService } from './../../services/tipounidad.service';
import { CategoriaService } from './../../services/categoria.service';
import { TipoventaService } from './../../services/tipoventa.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html'

})
export class ProductoComponent implements OnInit {

  categorias: any[]
  ubicaciones: any[]
  unidades: any[]
  tipoventas: any[]

  constructor(
    private _UbicacionService: UbicacionService,
    private _TipounidadService: TipounidadService,
    private _CategoriaService: CategoriaService,
    private _TipoventaService: TipoventaService


  ) { }

  ngOnInit() {
    this._UbicacionService.GetUbicaciones().subscribe(data => {
      this.ubicaciones = data;
    })
    this._TipounidadService.GetTipoUnidades().subscribe(data => {
      this.unidades = data;
    })
    this._CategoriaService.GetCategorias().subscribe(data => {
      this.categorias = data;
    });
    this._TipoventaService.GetTipoventas().subscribe(data => {
      this.tipoventas = data;
    });

  }

}
