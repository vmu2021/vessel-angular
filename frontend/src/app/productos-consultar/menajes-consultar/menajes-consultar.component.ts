import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';

@Component({
  selector: 'app-menajes-consultar',
  templateUrl: './menajes-consultar.component.html',
  styleUrls: ['./menajes-consultar.component.css']
})
export class MenajesConsultarComponent implements OnInit {

  lupa = faMagnifyingGlass;
  fpencil = faPencil;
  trashC = faTrashCan;

  @Input() menaje: MenajeImpl = new MenajeImpl();
  @Output() menajeConsultar = new EventEmitter<MenajeImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.menajeConsultar.emit(this.menaje);
  }

}
