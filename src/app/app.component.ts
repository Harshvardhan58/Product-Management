import {Component} from '@angular/core';
@Component({
  selector : 'pm-root',
  template : `
    <div>
      <div style="text-align: center;"><h1>{{pageTitle}}</h1></div>
      <pm-products></pm-products>
    </div>`
})
export class AppComponent{
  pageTitle: string = 'ACME product management';
}
