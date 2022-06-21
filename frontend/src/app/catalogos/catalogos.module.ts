import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogoConsultarComponent } from './catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogo-form/catalogo-form.component';
import { CatalogoModificarComponent } from './catalogo-modificar/catalogo-modificar.component';



@NgModule({
  declarations: [
    CatalogosComponent,
    CatalogoItemComponent,
    CatalogoConsultarComponent,
    CatalogoFormComponent,
    CatalogoModificarComponent,

  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class CatalogosModule { }
