import { TipounidadService } from './../../services/tipounidad.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tipounidad',
  templateUrl: './tipounidad.component.html'  
})
export class TipounidadComponent implements OnInit {
Unidades:any[];
  constructor(
 private _TipounidadService:TipounidadService

  ) { }

  ngOnInit() {
this._TipounidadService.GetTipoUnidades().subscribe(
  data=>{
    this.Unidades=data;
console.log(data);
  },error=>{

  }
);
  }

}
