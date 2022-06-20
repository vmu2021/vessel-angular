import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPencil, faTrashCan, faEye, faEraser, faCapsules, faPenToSquare, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { MenajeImpl } from '../../models/menaje-impl';


@Component({
  selector: 'app-menaje-item',
  templateUrl: './menaje-item.component.html',
  styleUrls: ['./menaje-item.component.css']
})
export class MenajeItemComponent implements OnInit {

  @Input() menaje: MenajeImpl = new MenajeImpl();
  @Output() menajeEliminar = new EventEmitter<MenajeImpl>();
  @Output() menajeEditar= new EventEmitter<MenajeImpl>();

  constructor() { }

  ngOnInit(): void {
  }

//delete
borrarMenaje(): void {
  if (confirm(`¿Está seguro de que desea eliminar este producto?`)){
  this.menajeEliminar.emit(this.menaje);
}
}

//patch
modificarMenaje(): void {
  this.menajeEditar.emit(this.menaje);
}

pencil = faPencil;
trash = faTrashCan;
eraser=faEraser;

}
