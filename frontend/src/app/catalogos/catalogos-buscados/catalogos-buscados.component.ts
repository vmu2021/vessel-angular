import { Component, Input, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogos-buscados',
  templateUrl: './catalogos-buscados.component.html',
  styleUrls: ['./catalogos-buscados.component.css']
})
export class CatalogosBuscadosComponent implements OnInit {

  
  @Input()catalogo: Catalogo=new CatalogoImpl();
  catalogos: Catalogo[]= [];

  constructor(private catalogoService: CatalogoService) { }

  ngOnInit(): void {
    this.catalogoService.getCatalogos().subscribe(response=>{
      this.catalogos = this.catalogoService.extraerCatalogos(response)
    })
  }

}
