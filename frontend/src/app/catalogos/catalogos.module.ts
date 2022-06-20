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
import { ProductosComponent } from './productos/productos.component';
import { ProductosConsultaComponent } from './productos-consulta/productos-consulta.component';
import { MenajeConsultaComponent } from './productos-consulta/menaje-consulta/menaje-consulta.component';
import { MenajeConsultaFormComponent } from './productos-consulta/menaje-consulta-form/menaje-consulta-form.component';
import { AlimentacionConsultaComponent } from './productos-consulta/alimentacion-consulta/alimentacion-consulta.component';
import { AlimentacionConsultaFormComponent } from './productos-consulta/alimentacion-consulta-form/alimentacion-consulta-form.component';
import { AlimentacionItemComponent } from './productos/alimentacion-item/alimentacion-item.component';
import { AlimentacionModificarComponent } from './productos/alimentacion-modificar/alimentacion-modificar.component';
import { ProductosFormComponent } from './productos/productos-form/productos-form.component';
import { MenajeItemComponent } from './productos/menaje-item/menaje-item.component';
import { MenajeModificarComponent } from './productos/menaje-modificar/menaje-modificar.component';


@NgModule({
  declarations: [
    CatalogosComponent,
    CatalogoItemComponent,
    CatalogoConsultarComponent,
    CatalogoFormComponent,
    CatalogoModificarComponent,
    ProductosComponent,
    ProductosConsultaComponent,
    MenajeConsultaComponent,
    MenajeConsultaFormComponent,
    AlimentacionConsultaComponent,
    AlimentacionConsultaFormComponent,
    AlimentacionItemComponent,
    AlimentacionModificarComponent,
    ProductosFormComponent,
    MenajeItemComponent,
    MenajeModificarComponent
  ],
  imports: [
    CommonModule,
    CatalogosRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class CatalogosModule { }
