import { Component, Input, OnInit } from '@angular/core';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-formulario-busqueda',
  templateUrl: './formulario-busqueda.component.html',
  styleUrls: ['./formulario-busqueda.component.css'],
})
export class FormularioBusquedaComponent implements OnInit {
  @Input() almacen: Catalogo = new CatalogoImpl();
  catalogos: Catalogo[] = [];
  catalogoVerDatos: Catalogo = new CatalogoImpl();
  descripcion: string = '';
  refrigerado: boolean = false;
  reciclable: boolean = false;

  constructor(private catalogoService: CatalogoService) {}

  ngOnInit(): void {}

  catalogosBuscados(descripcion: string, refrigerado: boolean) {
    this.catalogoService
      .getCatalogosBuscados(descripcion, refrigerado)
      .subscribe((response) => {
        this.catalogos = this.catalogoService.extraerCatalogos(response);
      });
  }
  verDatos(catalogo: Catalogo): void {
    this.catalogoVerDatos = catalogo;
  }
}
