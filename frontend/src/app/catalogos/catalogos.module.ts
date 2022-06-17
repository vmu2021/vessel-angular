import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CatalogosComponent,
    CatalogoItemComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule
  ]
})
export class CatalogosModule { }
