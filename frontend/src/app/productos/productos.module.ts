import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    ProductosComponent,
    ProductoItemComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductosModule { }
