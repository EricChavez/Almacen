import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class DepartamentoService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice
  ) { }

  public GetDepartamentos() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Departamento';
    return this.http.get(url, options)
      .map(res => res.json())
      .catch(err => err);
  }

  public AddDepartamento(obj: any) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const data = {
      'Descripcion': obj.Descripcion,
      'Activo': obj.Activo
    };
    const body = JSON.stringify(data);

    const url = this._GlobalurlService.getUrl() + '/api/Departamento';
    return this.http.post(url, body, options)
      .map(res => res.json())
      .catch(err => err);
  }
  // tslint:disable-next-line:eofline
}