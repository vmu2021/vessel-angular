import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogo-modificar',
  templateUrl: './catalogo-modificar.component.html',
  styleUrls: ['./catalogo-modificar.component.css']
})
export class CatalogoModificarComponent implements OnInit {

  catalogo: Catalogo= new CatalogoImpl();

    todosAlmacenes: Catalogo[]= [];

  constructor(
    private catalogoService: CatalogoService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    let id: string = this.cargarCatalogo();
    this.catalogoService.getCatalogo(id).subscribe((response) =>{
      this.catalogo = this.catalogoService.mapearCatalogo(response);
    })
  }

  cargarCatalogo(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

onEditarCatalogo(): void{
    this.catalogoService.updateCatalogo(this.catalogo).subscribe();
    this.router.navigate(['catalogos']);
  }

onProductoCrear(catalogo: Catalogo){
  this.verDatos(catalogo);
  let url = `almacenes/editar/${catalogo.idCatalogo}/formularioProducto`;
  this.router.navigate([url]);
}

verDatos(catalogo: Catalogo): void {
  this.catalogo = catalogo;
}
  // getTodosAlmacenes(): void {
  //   this.almacenService.getAlmacenes().subscribe(r =>{
  //           this.todosAlmacenes.push(...this.almacenService.extraerAlmacenes(r));
  //         });
  // }

  // modificarAlmacen(idAlmacen: string, almacen: AlmacenImpl): void{
  //   this.almacenService.patchAlmacen(idAlmacen,almacen).subscribe();
  // }
}
