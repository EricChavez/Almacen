import { Component, OnInit } from '@angular/core';
import { DepartamentoService } from '../../services/departemento.service';
@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',

})
export class DepartamentoComponent implements OnInit {


  departamentos: any[];
  constructor(
    // tslint:disable-next-line:typedef-whitespace
    private _DepartamentoService: DepartamentoService
  ) { }

  ngOnInit() {
    this._DepartamentoService.GetDepartamentos().subscribe(data => {
      this.departamentos = data;
    });

  }

}
