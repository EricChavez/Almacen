import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TipounidadService {

  constructor(

     private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService
  ) { }

public GetTipoUnidades() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Unidad';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public GetTipoUnidad(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Unidad/' + id;
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public AddUnidad(object: any) {
    const headers = new Headers();
    const data = {
       'UnidadId': 0,
       'Descripcion': object.Descripcion,
      'Activo' : object.Activo
    };
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
     const body = JSON.stringify(data);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
    const url = this._GlobalurlService.getUrl() + '/api/Unidad';
    return this.http.post(url, body , options)
      .map(res => res.json());
  }

  public EditUnidad(id: number, object: any) {
    const headers = new Headers();
    const data = {
       'UnidadId': id,
       'Descripcion': object.Descripcion,
      'Activo' : object.Activo
    };
     const body = JSON.stringify(data);
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Put });
    const url = this._GlobalurlService.getUrl() + '/api/Unidad'+ id;
    return this.http.put(url, body , options)
      .map(res => res.json());
  }

}
