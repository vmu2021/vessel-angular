import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path:'',
  component: HomeComponent
},
{
path: "not-found" , component: NotFoundComponent
},
{
  path:'catalogos',
  loadChildren: () => import('src/app/catalogos/catalogos.module').then(m => m.CatalogosModule)
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
