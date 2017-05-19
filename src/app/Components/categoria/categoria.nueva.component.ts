import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { DepartamentoService } from '../../services/departemento.service'
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-categoria.nueva',
  templateUrl: './categoria.nueva.component.html'
})
export class CategoriaNuevaComponent implements OnInit {
  forma: FormGroup;
  Departamentos: any[];
  Tittle: string;
  constructor(
    private _CategoriaService: CategoriaService,
    private _DepartamentoService: DepartamentoService,
    private _Router: Router,
    private _notificationsService: NotificationsService


  ) {
    this.forma = new FormGroup({
      'Nombre': new FormControl('', Validators.required),
      'Descripcion': new FormControl('', Validators.required),
      'Activo': new FormControl(''),
      'Departamento': new FormControl('', Validators.required)
    });
    this.Tittle = 'Nueva categoria';
  }

  ngOnInit() {
    this._DepartamentoService.GetDepartamentos().subscribe(
      data => {
       this.Departamentos = data;
      }
    );
  }

  guardarCambios() {
    const obj = {
      CategoriaId: '',
      Nombre: this.forma.value.Nombre,
      Descripcion: this.forma.value.Descripcion,
      Activo: this.forma.value.Activo,
      DepartamentoId: this.forma.value.Departamento
    };
    this._CategoriaService.AddCategoria(obj).subscribe(
      data => {
          this.showSuccess();
        this._Router.navigate(['/home/categoria']);
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



// tslint:disable-next-line:eofline
}