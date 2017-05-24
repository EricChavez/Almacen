import { UbicacionService } from './../../services/ubicacion.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html'
})
export class UbicacionComponent implements OnInit {

  ubicaciones: any[];
  constructor(

    private _UbicacionService: UbicacionService

  ) { }

  ngOnInit() {
    this._UbicacionService.GetUbicaciones().subscribe(
      data => {
        this.ubicaciones = data;
      },
      error => {
        console.log(error);
      }

    );
  }

}
