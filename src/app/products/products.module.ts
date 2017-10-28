import { NgModule } from '@angular/core';
import {ProductListComponent} from '../productList/ProductListComponent';
import {ProductDetailsComponent} from './product-details.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ProductsService} from '../productList/products.service';
import {ProductGaurdService} from './product-gaurd.service';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id', canActivate : [ProductGaurdService], component: ProductDetailsComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
  providers: [ProductsService]

})
export class ProductsModule { }
