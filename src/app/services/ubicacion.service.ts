import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UbicacionService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService

  ) { }


  public GetUbicaciones() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Ubicacion';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public AddUbicacion(object) {
    const data = {
      UbicacionId: 0,
      Descripcion: object.Descripcion,
      Activo: object.Activo
    };
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
     const body = JSON.stringify(data);
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
      const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
    const url = this._GlobalurlService.getUrl() + '/api/Ubicacion';
    return this.http.post(url, body, options)
      .map(res => res.json());
  }

}
