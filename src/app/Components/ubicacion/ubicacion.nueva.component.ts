import { UbicacionService } from './../../services/ubicacion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
@Component({
    selector: 'app-ubicacionnueva',
    templateUrl: './ubicacion.nueva.component.html',

})
export class UbicacionNuevaComponent implements OnInit {

    forma: FormGroup;
    Tittle: string;
    constructor(
        private _notificationsService: NotificationsService,
        private _UbicacionService: UbicacionService,
        private _Router: Router
    ) { }

    ngOnInit() {
        this.forma = new FormGroup({
            'Descripcion': new FormControl('', Validators.required),
            'Activo': new FormControl('')
        });
        
        this.Tittle = 'Nueva ubicación';
    }

    guardarCambios() {
        const obj = {
            UbicacionId: '',
            Descripcion: this.forma.value.Descripcion,
            Activo: this.forma.value.Activo
        };
        this._UbicacionService.AddUbicacion(obj).subscribe(data => {
            console.log(data);
            this.showSuccess();
            this._Router.navigate(['/home/ubicacion']);
        },
            error => {
                this.serverError(error);
            }

        );
    }

    showSuccess() {
        this._notificationsService.success(
            'Correcto',
            'La ubicación fue guardada correctamente',
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
