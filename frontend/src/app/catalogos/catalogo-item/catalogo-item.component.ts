import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAdd, faEraser, faMagnifyingGlass, faPencilAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styles: []
})
export class CatalogoItemComponent implements OnInit {
  catalogos: Catalogo[] = [];
  todosAlmacenes: Catalogo[] = [];
  catalogo$!: any;
  @Input() catalogo: Catalogo = new CatalogoImpl ();
  @Output() catalogoConsultar = new EventEmitter<CatalogoImpl>();
  @Output() catalogoEditar = new EventEmitter<Catalogo>();
  @Output() catalogoEliminar = new EventEmitter<CatalogoImpl>();

  constructor(private catalogoService:CatalogoService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  //  this.getCatalogo();
  //  this.catalogo$ = this.getCatalogo();
  //   console.log("HOLA")
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


  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;


}
