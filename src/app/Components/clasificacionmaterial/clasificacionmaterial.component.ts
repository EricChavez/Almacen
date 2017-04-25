import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-clasificacionmaterial',
  templateUrl: './clasificacionmaterial.component.html',
  styleUrls: ['./clasificacionmaterial.component.css']
})
export class ClasificacionmaterialComponent implements OnInit {
forma: FormGroup;
  clasificacion: Object = {
    id: "",
    descripcion: "",
    status: ""
  }
  constructor() {

    this.forma = new FormGroup({
      'descripcion': new FormControl('', Validators.required),
      'status': new FormControl('', Validators.required)
      //'id': new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
  }

   guardarCambios() {
    console.log(this.forma.value);
  }

}
