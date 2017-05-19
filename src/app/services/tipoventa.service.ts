
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TipoventaService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService

  ) { }


  public GetTipoventas() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/TipoVenta';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public GetTipoventa(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/TipoVenta/' + id;
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public EditTipoventa(id: number, obj: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const data = {
      TipoVentaId: id,
      Descripcion: obj.Descripcion,
      Activo: obj.Activo
    };
    const body = JSON.stringify(data);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/TipoVenta/' + id;
    return this.http.put(url, body, options)
      .map(res => res.json());
  }



  public AddTipoventa(obj: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const data = {
      'Descripcion': obj.Descripcion,
      'Activo': obj.Activo
    };
    const body = JSON.stringify(data);
    const url = this._GlobalurlService.getUrl() + '/api/TipoVenta';
    return this.http.post(url, body, options)
      .map(res => res.json());
  }
  // tslint:disable-next-line:eofline
}


