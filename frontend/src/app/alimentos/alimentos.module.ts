import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentosRoutingModule } from './alimentos-routing.module';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { AlimentoItemComponent } from './alimento-item/alimento-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AlimentosComponent,
    AlimentoItemComponent,
  ],
  imports: [
    CommonModule,
    AlimentosRoutingModule,
    FormsModule
  ],
  providers: []
})
export class AlimentosModule { }
