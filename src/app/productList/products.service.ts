import {IProducts} from './products';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class ProductsService {
  apiUrl: string= '../../api/products/products.json';
  constructor(private _http: HttpClient){}
  getProducts(): Observable<IProducts[]> {
    return this._http.get<IProducts[]>(this.apiUrl);
  }
}
