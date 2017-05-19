import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Globalservice } from './globalservice.service';
import { NotificationsService } from 'angular2-notifications';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoriaService {

  constructor(
    private http: Http,
    private _GlobalurlService: Globalservice,
    private _notificationsService: NotificationsService
  ) { }

  public GetCategorias() {
     const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    // headers.append('Authorization', `Token ${this._localStorage.get('token')}`);
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Categorias';
    return this.http.get(url, options)
      .map(res => res.json());
  }

  public AddCategoria(object) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const data = {
      'Nombre': object.Nombre,
      'Descripcion': object.Descripcion,
      'Activo': object.Activo,
      'DepartamentoId': object.DepartamentoId
    }
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Post });
    const body = JSON.stringify(data);
    const url = this._GlobalurlService.getUrl() + '/api/Categorias';
    return this.http.post(url, body, options)
      .map(res => res)
      .catch( err => err );

  }

  public GetOneCategoria(id: number) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/JSON');
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Get });
    const url = this._GlobalurlService.getUrl() + '/api/Categorias/' + id;
    return this.http.get(url, options)
      .map(res => res.json())
      .catch(err => err);
  }

  public EditCategoria(id: number, object) {
    const headers = new Headers();
    const data = {
      'CategoriaId': id,
      'Nombre': object.Nombre,
      'Descripcion': object.Descripcion,
      'Activo': object.Activo,
      'DepartamentoId': object.DepartamentoId
    };
    const body = JSON.stringify(data);
    headers.append('Content-Type', 'application/JSON');
    const options = new RequestOptions({ headers: headers, method: RequestMethod.Put });
    const url = this._GlobalurlService.getUrl() + '/api/Categorias/' + id;
    return this.http.put(url, body, options)
      .map(res => res);

  }


// tslint:disable-next-line:eofline
}