import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoItemComponent } from './producto-item/producto-item.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
{
  path: '',
  component: ProductosComponent
},
{
  path:':id',
  component:ProductoItemComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
