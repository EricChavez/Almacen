import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-clasificacion-articulo',
  templateUrl: './clasificacion-articulo.component.html',
  styleUrls: ['./clasificacion-articulo.component.css']
})
export class ClasificacionArticuloComponent implements OnInit {

  forma: FormGroup;
  clasificacion: Object = {
    id: "",
    descripcion: "",
    activo: ""
  }

  constructor() {
    this.forma = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'activo': new FormControl('', Validators.required)
    });
  }

  guardarCambios() {
    console.log(this.forma.value);
  }

  ngOnInit() {
  }

}
