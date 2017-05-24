import { UbicacionService } from './../../services/ubicacion.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
    selector: 'app-tipoventaedita',
    templateUrl: './ubicacion.nueva.component.html'
})
export class UbicacionEditaComponent implements OnInit {

    forma: FormGroup;
    Tittle: string;
    id: number;

    constructor(
        private _notificationsService: NotificationsService,
        private _UbicacionService: UbicacionService,
        private _Router: Router,
        private _route: ActivatedRoute
            ) { }

    ngOnInit() {
        this._route.params.subscribe(
            (params: Params) => {
                this.id = params['id'];
            }
        );
        this.forma = new FormGroup({
            'Descripcion': new FormControl('', Validators.required),
            'Activo': new FormControl('')
        });

         this._UbicacionService.GetUbicacion(this.id).subscribe(
              data => {
                  console.log(data);
                this.forma.controls['Descripcion'].setValue(data.Descripcion);
                this.forma.controls['Activo'].setValue(data.Activo);
            }, error => {
                this.serverError(error);
            });


        this.Tittle = 'Edita ubicación';
    }

    guardarCambios() {
        const obj = {
            UbicacionId: this.id,
            Descripcion: this.forma.value.Descripcion,
            Activo: this.forma.value.Activo
        };
        this._UbicacionService.EditUbicacion(this.id, obj).subscribe(data => {
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



}
