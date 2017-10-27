import {Component} from '@angular/core';
@Component({
  selector : 'pm-root',
  template : `
    <div class="navbar navbar-default">
      <div class="container-fluid">
        <div class="nav navbar-header">
          <a class="nav navbar-brand">{{pageTitle}}</a>
        </div>
          <ul class="nav navbar-nav">
            <li><a [routerLink]="['']">HOME</a></li>
            <li><a [routerLink]="['products/']" >Product List</a></li>
          </ul>
        </div>
      </div>
  <div class="container">
    <router-outlet></router-outlet>
  </div> `
})
export class AppComponent{
  pageTitle: string = 'ACME product management';
}
