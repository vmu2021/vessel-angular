import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoItemComponent } from './catalogo-item/catalogo-item.component';
import { CatalogosComponent } from './catalogos/catalogos.component';

const routes: Routes = [
  {
    path:'',
    component:CatalogosComponent
  },
  {
    path:':id',
    component:CatalogoItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogosRoutingModule { }
