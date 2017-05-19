import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departemento.service';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
@Component({
    selector: 'app-departamentonuevo',
    templateUrl: './departamento.nuevo.component.html',

})
export class DepartamentoNuevoComponent implements OnInit {

    forma: FormGroup;
    Tittle: string;
    constructor(
        private _notificationsService: NotificationsService,
        private _DepartamentoService: DepartamentoService,
        private _Router: Router
    ) { }

    ngOnInit() {
        this.forma = new FormGroup({
            'Descripcion': new FormControl('', Validators.required),
            'Activo': new FormControl('')
        });
        this.Tittle = 'Nuevo departamento';
    }

    guardarCambios() {
        const obj = {
            DepartamentoId: '',
            Descripcion: this.forma.value.Descripcion,
            Activo: this.forma.value.Activo
        };
        this._DepartamentoService.AddDepartamento(obj).subscribe(data => {
            console.log(data);
            this.showSuccess();
              this._Router.navigate(['/home/departamentos']);
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

}
