import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductoService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService

  ) { }

  public GetProductos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Producto';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public GetProducto(id) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Producto/' + id;
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public AddProducto(obj) {
    const data = {
      'UPC': obj.UPC,
      'Nombre': obj.Nombre,
      'Descripcion': obj.Descripcion,
      'CategoriaId': obj.CategoriaId,
      'TipoVentaId': obj.TipoVentaId,
      'EspecificacionId': obj.EspecificacionId,
      'UnidadId': obj.UnidadId,
      'CantidadMinima': obj.CantidadMinima,
      'Credito': obj.Credito,
      'Serie': obj.Serie,
      'DevMatriz': obj.DevMatriz,
      'CantidadOrden': obj.CantidadOrden,
      'FechaIngreso': '02/05/2017',
      'UbicacionId': 1,
      'FechaBaja': '02/05/2017',
      'Precioventa': obj.UbicacionId,
      'PrecioCredito': obj.PrecioCredito
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
    const body = JSON.stringify(data);
    const url = this._GlobalurlService.getUrl() + '/api/Producto';
    return this.http.post(url, body, options)
      .map(res => res)
      .catch(err => err);
  }

}
