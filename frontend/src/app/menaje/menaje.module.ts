import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenajeRoutingModule } from './menaje-routing.module';
import { MenajeComponent } from './menaje/menaje.component';
import { MenajeItemComponent } from './menaje-item/menaje-item.component';


@NgModule({
  declarations: [
    MenajeComponent,
    MenajeItemComponent
  ],
  imports: [
    CommonModule,
    MenajeRoutingModule
  ]
})
export class MenajeModule { }
