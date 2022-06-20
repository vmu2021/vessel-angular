import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from '../models/catalogo';
import { faPencil, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styles: [''],
})
export class CatalogosComponent implements OnInit {
  catalogos: Catalogo[] = [];
  catalogoVerDatos: Catalogo = new CatalogoImpl();

  constructor(
    private catalogoService: CatalogoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.catalogoService.getCatalogos().subscribe(response =>{
    //   this.catalogos = this.catalogoService.extraerCatalogos(response);
    //   console.log(this.catalogoService.mapearCatalogo(response._embedded.catalogos[0]));
    //   console.log(this.catalogos)

    // });

    this.catalogoService
      .getCatalogos().subscribe((response) =>{
      this.catalogos = this.catalogoService.extraerCatalogos(response);
      });



  }

  verDatos(catalogo: Catalogo): void {
    this.catalogoVerDatos = catalogo;
  }

  onCatalogoEliminar(catalogo: Catalogo) {
    console.log(`Eliminado el catalogo ${catalogo.descripcion}`);
    this.catalogoService.deleteCatalogo(catalogo.idCatalogo).subscribe();
    this.router.navigate(['catalogos']);
  }

  onCatalogoEditar(catalogo: Catalogo) {
    this.verDatos(catalogo);
    let url = `catalogos/editar/${catalogo.idCatalogo}`;
    this.router.navigate([url]);
  }
  onCatalogoConsultar(catalogo: Catalogo) {
    this.verDatos(catalogo);
    let url = `almacen/consultar/${catalogo.idCatalogo}`;
    this.router.navigate([url]);
  }

  pencil = faPencil;
  eye = faEye;
  trash = faTrashCan;
}
