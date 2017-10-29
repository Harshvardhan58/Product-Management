import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import {ProductsService} from './productList/products.service';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGaurdService } from './products/product-gaurd.service';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,

    RouterModule.forRoot([
      {path: 'welcome' , component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    ProductsModule
  ],
  providers: [ ProductGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
