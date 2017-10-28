import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConvertToSpaces} from './convertToSpaces';
import {StarComponent} from './star.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConvertToSpaces,
    StarComponent,
  ],
  exports: [
    CommonModule,
    ConvertToSpaces,
    StarComponent,
    FormsModule,
  ]
})
export class SharedModule { }
