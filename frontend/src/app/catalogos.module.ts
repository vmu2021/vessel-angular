import { InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogosRoutingModule } from './catalogos/catalogos-routing.module';
import { CatalogosComponent } from './catalogos/catalogos/catalogos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CatalogoConsultarComponent } from './catalogos/catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogos/catalogo-form/catalogo-form.component';
import { CatalogoItemComponent } from './catalogos/catalogo-item/catalogo-item.component';
import { CatalogoModificarComponent } from './catalogos/catalogo-modificar/catalogo-modificar.component';
import { ProductosComponent } from './productos/productos/productos.component';
import { AlimentacionItemComponent } from './productos/alimentacion-item/alimentacion-item.component';
import { AlimentacionModificarComponent } from './productos/alimentacion-modificar/alimentacion-modificar.component';
import { MenajeItemComponent } from './productos/menaje-item/menaje-item.component';
import { ProductosConsultarComponent } from './productos-consultar/productos-consultar.component';
import { AlimentacionConsultaComponent } from './catalogos/productos-consulta/alimentacion-consulta/alimentacion-consulta.component';
import { AlimentacionesConsultarFormComponent } from './productos-consultar/alimentaciones-consultar-form/alimentaciones-consultar-form.component';
import { MenajeConsultaFormComponent } from './catalogos/productos-consulta/menaje-consulta-form/menaje-consulta-form.component';
import { MenajesConsultarComponent } from './productos-consultar/menajes-consultar/menajes-consultar.component';
import { FormularioBusquedaComponent } from './catalogos/formulario-busqueda/formulario-busqueda.component';
import { CatalogosBuscadosComponent } from './catalogos/catalogos-buscados/catalogos-buscados.component';
import { ProductosConsultaComponent } from './catalogos/productos-consulta/productos-consulta.component';
import { AlimentacionConsultaFormComponent } from './catalogos/productos-consulta/alimentacion-consulta-form/alimentacion-consulta-form.component';
import { MenajeConsultaComponent } from './catalogos/productos-consulta/menaje-consulta/menaje-consulta.component';
import { ProductoService } from './catalogos/service/producto.service';


@NgModule({
  declarations: [
    CatalogosComponent,
    CatalogoConsultarComponent,
    CatalogoFormComponent,
    CatalogoModificarComponent,
    AlimentacionItemComponent,
    AlimentacionModificarComponent,
    MenajeItemComponent,
    ProductosConsultarComponent,
    ProductosConsultaComponent,
    AlimentacionesConsultarFormComponent,
    AlimentacionConsultaFormComponent,
    MenajeConsultaComponent,
    MenajeConsultaFormComponent,
    FormularioBusquedaComponent,
    CatalogosBuscadosComponent
  ],
  imports: [
    CommonModule,
    FormsModule, ReactiveFormsModule, CatalogosRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    {
      provide: new InjectionToken<any>('ProductoService'), // <-- doesn't work;  'CustomerService' <-- works
      useValue: ProductoService
    }
  ],
  exports:[]
})
export class CatalogosModule { }
