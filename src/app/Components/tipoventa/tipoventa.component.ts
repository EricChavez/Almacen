import { TipoventaService } from './../../services/tipoventa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipoventa',
  templateUrl: './tipoventa.component.html'
 
})
export class TipoventaComponent implements OnInit {

tipos: any [];
  constructor(
  private  _TipoventaService:TipoventaService
  ) { }

  ngOnInit() {
this._TipoventaService.GetTipoventas().subscribe(data=>{
  this.tipos=data;
})

  }

}
