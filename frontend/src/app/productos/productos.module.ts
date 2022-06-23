import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos/productos.component';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AlimentacionItemComponent } from './alimentacion-item/alimentacion-item.component';
import { AlimentacionModificarComponent } from './alimentacion-modificar/alimentacion-modificar.component';
import { ProductosFormComponent } from './productos-form/productos-form.component';
import { MenajeItemComponent } from './menaje-item/menaje-item.component';
import { MenajeModificarComponent } from './menaje-modificar/menaje-modificar.component';

@NgModule({
  declarations: [
    ProductoItemComponent,
    AlimentacionItemComponent,
    AlimentacionModificarComponent,
    ProductosFormComponent,
    MenajeItemComponent,
    MenajeModificarComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    FontAwesomeModule
  ]
})
export class ProductosModule { }
