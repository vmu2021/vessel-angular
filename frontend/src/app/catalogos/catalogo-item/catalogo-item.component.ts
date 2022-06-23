import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAdd, faEraser, faMagnifyingGlass, faPencilAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';
import { Producto } from '../models/producto';
import { ProductoService } from 'src/app/catalogos/service/producto.service';

import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styles: []
})
export class CatalogoItemComponent implements OnInit {
  catalogos: Catalogo[] = [];
  todosAlmacenes: Catalogo[] = [];
  catalogo$!: any;
  catalogoCompleto!: Catalogo;
  productosCatalogo:Producto[] = [];
  @Input() catalogo: Catalogo = new CatalogoImpl ();
  @Output() catalogoConsultar = new EventEmitter<CatalogoImpl>();
  @Output() catalogoEditar = new EventEmitter<Catalogo>();
  @Output() catalogoEliminar = new EventEmitter<CatalogoImpl>();


  constructor(private catalogoService:CatalogoService,private activatedRoute:ActivatedRoute,private productoService:ProductoService, private http:HttpClientModule) { }

  ngOnInit(): void {
    // console.log(this.catalogo);
// this.getProductosCatalogo();
this.extraerProductos();


  }


  eliminar(): void {
    if (confirm('¿Está seguro? Se borrará el catalogo y todo su contenido')){
      this.catalogoEliminar.emit(this.catalogo);
    }
  }


  consultar():void{
    this.catalogoConsultar.emit(this.catalogo);

  }

  editar(): void{
    this.catalogoEditar.emit(this.catalogo);
  }
  

  getCatalogo():any{
    console.log(this.catalogoService.getCatalogo((this.activatedRoute.snapshot.params['id'])));
    return this.catalogoService.getCatalogo((this.activatedRoute.snapshot.params['id']));

  }
 
  
getProductosCatalogo():Observable<any>{
  console.log(this.catalogoService.getCatalogoProductos((this.activatedRoute.snapshot.params['id'])));
  return this.catalogoService.getCatalogoProductos((this.activatedRoute.snapshot.params['id']));
}
extraerProductos():any{

  this.getProductosCatalogo().subscribe(response =>{
    this.productosCatalogo = this.productoService.extraerProductos(response);
    console.log(this.productosCatalogo);
  })
  
}


  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;

  


}
