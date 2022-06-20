import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoConsultarComponent } from './catalogo-consultar/catalogo-consultar.component';
import { CatalogoFormComponent } from './catalogo-form/catalogo-form.component';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { CatalogoModificarComponent } from './catalogo-modificar/catalogo-modificar.component';
import { CatalogosComponent } from './catalogos/catalogos.component';

const routes: Routes = [
  {
    path:'',
    component:CatalogosComponent
  },
  {
    path:':id',
    component:CatalogoItemComponent
  },
  {
    path:'editar/:id',
    component:CatalogoModificarComponent
  },
  {
    path:'consultar/:id',
    component:CatalogoConsultarComponent
  },
  {
    path:'formulario-catalogo',
    component:CatalogoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
