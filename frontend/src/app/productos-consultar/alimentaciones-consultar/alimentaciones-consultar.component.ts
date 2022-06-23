import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faMagnifyingGlass, faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';

@Component({
  selector: 'app-alimentaciones-consultar',
  templateUrl: './alimentaciones-consultar.component.html',
  styleUrls: ['./alimentaciones-consultar.component.css']
})
export class AlimentacionesConsultarComponent implements OnInit {

  
  lupa = faMagnifyingGlass;
  pencil = faPencil;
  trashC = faTrashCan;

  @Input() alimento: AlimentacionImpl = new AlimentacionImpl();
  @Output() alimentoConsultar = new EventEmitter<AlimentacionImpl>();

  constructor() { }

  ngOnInit(): void {
  }

  consultar(): void{
    this.alimentoConsultar.emit(this.alimento);
  }
}
