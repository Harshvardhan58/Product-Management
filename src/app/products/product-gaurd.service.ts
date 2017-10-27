import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable()
export class ProductGaurdService implements CanActivate{
  id: number;
  constructor(private _router: Router) { }
  canActivate(route: ActivatedRouteSnapshot): boolean{
    this.id = +route.url[1].path;
    if (isNaN(this.id) || this.id < 0){
      alert('invalid Id');
      this._router.navigate(['/products']);
      return false;
    }
    return true;
}
}
