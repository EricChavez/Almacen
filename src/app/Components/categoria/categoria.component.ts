import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { CategoriaService } from '../../services/categoria.service'
@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html'
})
export class CategoriaComponent implements OnInit {
productos: any[];

  constructor(
    private _CategoriaService: CategoriaService

  ) {

  }
  ngOnInit() {
    this._CategoriaService.GetCategorias().subscribe(
      data => {
        this.productos = data
      }
    );
  }
  

}
