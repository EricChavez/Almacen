import { TipounidadService } from './../../services/tipounidad.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';



@Component({
    selector: 'app-tipounidadnuevo',
    templateUrl: './tipounidad.nueva.component.html',

})
export class TipounidadNuevoComponent implements OnInit {

    forma: FormGroup;
    Tittle: string;
    constructor(
        private _notificationsService: NotificationsService,
        private _TipounidadService: TipounidadService,
        private _Router: Router
    ) { }

    ngOnInit() {
        this.forma = new FormGroup({
            'Descripcion': new FormControl('', Validators.required),
            'Activo': new FormControl('')
        });
        
        this.Tittle = 'Nuevo tipo unidad';
    }

    guardarCambios() {
        const obj = {
            TipoVentaId: '',
            Descripcion: this.forma.value.Descripcion,
            Activo: this.forma.value.Activo
        };
        this._TipounidadService.AddUnidad(obj).subscribe(data => {
            console.log(data);
            this.showSuccess();
            this._Router.navigate(['/home/unidad']);
        },
            error => {
                this.serverError(error);
            }

        );
    }

    showSuccess() {
        this._notificationsService.success(
            'Correcto',
            'El tipo de unidad fue guardada correctamente',
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



}
