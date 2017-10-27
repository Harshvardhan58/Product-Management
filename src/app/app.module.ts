import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './productList/ProductListComponent';
import {FormsModule} from '@angular/forms';
import {ConvertToSpaces} from './shared/convertToSpaces';
import {StarComponent} from './shared/star.component';
import {ProductsService} from './productList/products.service';
import {HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './products/product-details.component';
import {WelcomeComponent} from './home/welcome.component';
import {RouterModule} from '@angular/router';
import { ProductGaurdService } from './products/product-gaurd.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate : [ProductGaurdService], component: ProductDetailsComponent},
      {path: '' , component: WelcomeComponent},
      {path: '**', redirectTo: '/', pathMatch: 'full'}
    ])
  ],
  providers: [ProductsService, ProductGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
