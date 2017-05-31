import { ProductoService } from './../../services/producto.service';
import { UbicacionService } from './../../services/ubicacion.service';
import { TipounidadService } from './../../services/tipounidad.service';
import { CategoriaService } from './../../services/categoria.service';
import { TipoventaService } from './../../services/tipoventa.service';
import { Component, OnInit } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
    selector: 'app-productoedita',
    templateUrl: './producto.nuevo.component.html'
})

export class ProductoEditaComponent implements OnInit {
    categorias: any[];
    ubicaciones: any[];
    unidades: any[];
    tipoventas: any[];
    forma: FormGroup;
    Tittle: string;
    id: string;
    constructor(
        private _UbicacionService: UbicacionService,
        private _TipounidadService: TipounidadService,
        private _CategoriaService: CategoriaService,
        private _TipoventaService: TipoventaService,
        private _ProductoService: ProductoService,
        private _notificationsService: NotificationsService,
        private _Router: Router,
        private _route: ActivatedRoute
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
        this.Tittle = 'Edita producto';
        this._route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
            }
        );
        this._ProductoService.GetProducto(this.id).subscribe(
            data => {
                this.forma = new FormGroup({
                    'UPC': new FormControl(data.UPC, Validators.required),
                    'Nombre': new FormControl(data.Nombre, Validators.required),
                    'Descripcion': new FormControl(data.Descripcion, Validators.required),
                    'CategoriaId': new FormControl(data.CategoriaId, Validators.required),
                    'TipoVentaId': new FormControl(data.TipoVentaId, Validators.required),
                    'UnidadId': new FormControl(data.UnidadId, Validators.required),
                    'CantidadMinima': new FormControl(data.CantidadMinima, Validators.required),
                    'UbicacionId': new FormControl(data.UbicacionId, Validators.required),
                    'Activo': new FormControl(data.Activo),
                    'Serie': new FormControl(data.Serie),
                    'DevMatriz': new FormControl(data.DevMatriz),
                    'CantidadOrden': new FormControl(data.CantidadOrden, Validators.required),
                    'Precioventa': new FormControl(data.Precioventa, Validators.required),
                    'PrecioCredito': new FormControl(data.PrecioCredito, Validators.required),
                    'FechaIngreso': new FormControl(data.FechaIngreso),
                    'FechaBaja': new FormControl(data.FechaBaja)
                });
            },
            error => {

                this.serverError('');
            });


        this.Tittle = 'Nuevo producto';

    }

    guardarCambios() {

        const object = {
            'ProductoId': this.id,
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
        this._ProductoService.EditProducto(object,this.id).subscribe(data => {
            this.showSuccess();
             this._Router.navigate(['/home/producto']);
        }, error => {
            this.serverError('');
        });
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