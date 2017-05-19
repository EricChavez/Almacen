import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service';
import { DepartamentoService } from '../../services/departemento.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
@Component({
  selector: 'app-categoria.nueva',
  templateUrl: './categoria.nueva.component.html'
})
export class CategoriaEditaComponent implements OnInit {
  forma: FormGroup;
  Departamentos: any[];
  id: any;
  Tittle: String;
  constructor(
    private _CategoriaService: CategoriaService,
    private _DepartamentoService: DepartamentoService,
    private _route: ActivatedRoute,
    private _Router: Router

  ) {
    this.forma = new FormGroup({
      'Nombre': new FormControl('', Validators.required),
      'Descripcion': new FormControl('', Validators.required),
      'Activo': new FormControl(''),
      'Departamento': new FormControl('', Validators.required)
    });
    this.Tittle = 'Editar categoria';
  }
  ngOnInit() {
    this._DepartamentoService.GetDepartamentos().subscribe(
      data => {
        this.Departamentos = data;
      }
    );
    this._route.params.subscribe(
      (params: Params) => {
       this.id = params['id'];
      }
    );
    console.log(this.id);
    this._CategoriaService.GetOneCategoria(this.id).subscribe(
      data => {
       this.forma.controls['Nombre'].setValue(data.Nombre);
        this.forma.controls['Descripcion'].setValue(data.Descripcion);
        this.forma.controls['Activo'].setValue(data.Activo);
        this.forma.controls['Departamento'].setValue(data.DepartamentoId);
        console.log(data);
      });

  }

  guardarCambios() {
    const obj = {
      CategoriaId: this.id,
      Nombre: this.forma.value.Nombre,
      Descripcion: this.forma.value.Descripcion,
      Activo: this.forma.value.Activo,
      DepartamentoId: this.forma.value.Departamento
    };
    this._CategoriaService.EditCategoria(this.id, obj).subscribe(
      data => {
      this._Router.navigate(['/home/categoria']);
      });

  }

// tslint:disable-next-line:eofline
}