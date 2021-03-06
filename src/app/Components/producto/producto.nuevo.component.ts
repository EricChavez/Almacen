import { ProductoService } from './../../services/producto.service';
import { UbicacionService } from './../../services/ubicacion.service';
import { TipounidadService } from './../../services/tipounidad.service';
import { CategoriaService } from './../../services/categoria.service';
import { TipoventaService } from './../../services/tipoventa.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
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
        private _TipoventaService: TipoventaService,
        private _ProductoService: ProductoService,
          private _notificationsService: NotificationsService,
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
            'UPC': new FormControl('', Validators.required),
            'Nombre': new FormControl('', Validators.required),
            'Descripcion': new FormControl('', Validators.required),
            'CategoriaId': new FormControl('', Validators.required),
            'TipoVentaId': new FormControl('', Validators.required),
            'UnidadId': new FormControl('', Validators.required),
            'CantidadMinima': new FormControl('', Validators.required),
            'UbicacionId': new FormControl('', Validators.required),
            'Activo': new FormControl('', Validators.required),
            'Serie': new FormControl('', Validators.required),
            'DevMatriz': new FormControl('', Validators.required),
            'CantidadOrden': new FormControl('', Validators.required),
            'Precioventa': new FormControl('', Validators.required),
            'PrecioCredito': new FormControl('', Validators.required),
            'FechaIngreso': new FormControl(''),
            'FechaBaja': new FormControl('')
        });
        this.Tittle = 'Nuevo producto';

    }

    guardarCambios() {

        const object = {
            'ProductoId': 0,
            'UPC': this.forma.value.UPC,
            'Nombre': this.forma.value.Nombre,
            'Descripcion': this.forma.value.Descripcion,
            'CategoriaId': this.forma.value.CategoriaId,
            'TipoVentaId': this.forma.value.TipoVentaId,
            'UnidadId': this.forma.value.UnidadId,
            'CantidadMinima': this.forma.value.CantidadMinima,
            'Serie': this.forma.value.Serie,
            'DevMatriz': this.forma.value.DevMatriz,
            'CantidadOrden': this.forma.value.CantidadOrden,
            'Precioventa': this.forma.value.Precioventa,
            'PrecioCredito': this.forma.value.PrecioCredito,
            'Activo': this.forma.value.Activo,
            'UbicacionId': this.forma.value.UbicacionId
        };
        this._ProductoService.AddProducto(object).subscribe(data => {
            this.showSuccess();
        }, error => {
              this.serverError('');
        });
        console.log(object);


    }

     showSuccess() {
        this._notificationsService.success(
            'Correcto',
            'La categoria fue guardada correctamente',
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 100,
                position: ['top', 'right'],
            }
        );
    }

    serverError(err) {
        console.log(err);
        this._notificationsService.error(
            'Ha ocurrido un error',
            'detalle de error',
            {
                timeOut: 3000,
                showProgressBar: true,
                pauseOnHover: false,
                clickToClose: true,
                maxLength: 100,
                position: ['top', 'right'],
            }
        );
    }



    // tslint:disable-next-line:eofline
}