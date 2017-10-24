import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ProductListComponent} from './productList/ProductListComponent';
import {FormsModule} from '@angular/forms';
import {ConvertToSpaces} from './shared/convertToSpaces';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpaces
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
