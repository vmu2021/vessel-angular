import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAdd, faEraser, faMagnifyingGlass, faPencilAlt, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styles: []
})
export class CatalogoItemComponent implements OnInit {
  catalogos: Catalogo[] = [];
  todosAlmacenes: Catalogo[] = [];

  @Input() catalogo: Catalogo = new CatalogoImpl ();
  @Output() catalogoConsultar = new EventEmitter<CatalogoImpl>();
  @Output() catalogoEditar = new EventEmitter<Catalogo>();
  @Output() catalogoEliminar = new EventEmitter<CatalogoImpl>();

  constructor() { }

  ngOnInit(): void {
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


  pencil=faPencilAlt;
  lupa=faMagnifyingGlass;
  trash=faTrashCan;
  eraser= faEraser;
  plus=faAdd;


}
