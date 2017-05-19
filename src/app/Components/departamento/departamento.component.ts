import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departemento.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',

})
export class DepartamentoComponent implements OnInit {


  departamentos: any[];
  constructor(
    // tslint:disable-next-line:typedef-whitespace
    private _DepartamentoService: DepartamentoService,
    private _notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this._DepartamentoService.GetDepartamentos().subscribe(data => {
      this.departamentos = data;
    }, error => {
      this.serverError(error);
    });
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
