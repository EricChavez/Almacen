import { Params } from '@angular/router';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class DepartamentoService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService
  ) { }

  public GetDepartamentos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Departamento';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public GetDepartamento(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Departamento/' + id;
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public EditDepartamento(id: number, obj: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const data = {
      DepartamentoId: id,
      Descripcion: obj.Descripcion,
      Activo: obj.Activo
    };
    const body = JSON.stringify(data);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Departamento/' + id;
    return this.http.put(url, body, options)
      .map(res => res.json());
  }



  public AddDepartamento(obj: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const data = {
      'DepartamentoId':0,
      'Descripcion': obj.Descripcion,
      'Activo': obj.Activo
    };
    const body = JSON.stringify(data);
    const url = this._GlobalurlService.getUrl() + '/api/Departamento';
    return this.http.post(url, body, options)
      .map(res => res.json());
      }
  // tslint:disable-next-line:eofline
}