import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faEye, faTrashCan, faEraser } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from '../../models/alimentacion-impl';
import { Catalogo } from '../../models/catalogo';

@Component({
  selector: 'app-alimentacion-item',
  templateUrl: './alimentacion-item.component.html',
  styleUrls: ['./alimentacion-item.component.css']
})
export class AlimentacionItemComponent implements OnInit {
  catalogos: Catalogo[] = [];
  todosCatalogos: Catalogo[] = [];

  @Input() alimento: AlimentacionImpl = new AlimentacionImpl();
  @Output() alimentoEliminar = new EventEmitter<AlimentacionImpl>();
  @Output() alimentoEditar = new EventEmitter<AlimentacionImpl>();

  constructor() {}

  ngOnInit(): void {
  }

//delete
borrarLavadora(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.alimentoEliminar.emit(this.alimento);
}
}

//patch
modificarAlimento(): void {
  this.alimentoEditar.emit(this.alimento);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;


}
