import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoFormComponent } from './catalogos/catalogo-form/catalogo-form.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },

  {
    path: 'catalogos',
    loadChildren: () => import("./catalogos/catalogos.module").then((m) => m.CatalogosModule)
  },

  {
    path: 'formulario-catalogo',
    component: CatalogoFormComponent
  },
  {
    path: 'productos',
    loadChildren: () => import("./productos/productos.module").then((m) => m.ProductosModule)
  },
{
path: "not-found" , 
component: NotFoundComponent
},
{
  path:'**',
  redirectTo: "not-found",
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
