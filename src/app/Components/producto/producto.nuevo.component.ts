import { UbicacionService } from './../../services/ubicacion.service';
import { TipounidadService } from './../../services/tipounidad.service';
import { CategoriaService } from './../../services/categoria.service';
import { TipoventaService } from './../../services/tipoventa.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
@Component({
    selector: 'app-productonuevo',
    templateUrl: './producto.nuevo.component.html'
})

export class ProductoNuevoComponent implements OnInit {
    categorias: any[];
    ubicaciones: any[];
    unidades: any[];
    tipoventas: any[];
    forma: FormGroup;
    Tittle: string;
    constructor(
        private _UbicacionService: UbicacionService,
        private _TipounidadService: TipounidadService,
        private _CategoriaService: CategoriaService,
        private _TipoventaService: TipoventaService
    ) { }

    ngOnInit() {
        this._UbicacionService.GetUbicaciones().subscribe(data => {
            this.ubicaciones = data;
        });
        this._TipounidadService.GetTipoUnidades().subscribe(data => {
            this.unidades = data;
        });
        this._CategoriaService.GetCategorias().subscribe(data => {
            this.categorias = data;
        });
        this._TipoventaService.GetTipoventas().subscribe(data => {
            this.tipoventas = data;
        });

        this.forma = new FormGroup({
            'UPC': new FormControl('',    Validators.required),
            'Nombre': new FormControl('', Validators.required),
            'Descripcion': new FormControl('', Validators.required),
            'CategoriaId': new FormControl('', Validators.required),
            'TipoVentaId': new FormControl('', Validators.required),
            'UnidadId': new FormControl('', Validators.required),
            'CantidadMinima': new FormControl('', Validators.required),
            'Credito': new FormControl('', Validators.required),
            'Serie': new FormControl('', Validators.required),
            'DevMatriz': new FormControl('', Validators.required),
            'CantidadOrden': new FormControl('', Validators.required),
            'Precioventa': new FormControl('', Validators.required),
            'PrecioCredito': new FormControl('', Validators.required),
            'FechaIngreso': new FormControl('', Validators.required),
            'FechaBaja': new FormControl('')
        });
        this.Tittle = 'Nuevo producto';

    }

    // tslint:disable-next-line:eofline
}