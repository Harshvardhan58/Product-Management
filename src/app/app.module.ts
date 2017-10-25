import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './productList/ProductListComponent';
import {FormsModule} from '@angular/forms';
import {ConvertToSpaces} from './shared/convertToSpaces';
import {StarComponent} from './shared/star.component';
import {ProductsService} from './productList/products.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
