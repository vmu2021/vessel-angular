import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from '../../models/alimentacion-impl';
@Component({
  selector: 'app-alimentacion-consulta',
  templateUrl: './alimentacion-consulta.component.html',
  styleUrls: ['./alimentacion-consulta.component.css']
})
export class AlimentacionConsultaComponent implements OnInit {

  lupa = faMagnifyingGlass;
  fpencil = faPencil;
  trashC = faTrashCan;

  @Input() alimentacion: AlimentacionImpl = new AlimentacionImpl();
  @Output() alimenacionConsultar = new EventEmitter<AlimentacionImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.alimenacionConsultar.emit(this.alimentacion);
  }

}
