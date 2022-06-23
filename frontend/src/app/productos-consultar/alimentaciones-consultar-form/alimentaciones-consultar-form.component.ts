import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { ProductoService } from 'src/app/catalogos/service/producto.service';

@Component({
  selector: 'app-alimentaciones-consultar-form',
  templateUrl: './alimentaciones-consultar-form.component.html',
  styleUrls: ['./alimentaciones-consultar-form.component.css']
})
export class AlimentacionesConsultarFormComponent implements OnInit {

  alimento: AlimentacionImpl = new AlimentacionImpl();

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarAlimento();
    this.productoService.getAlimento(id).subscribe(response =>
      this.alimento = this.productoService.mapearAlimento(response));
  }


  cargarAlimento(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

}
