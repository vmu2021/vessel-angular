import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../../service/producto.service';
import { AlimentacionImpl } from '../../models/alimentacion-impl';

@Component({
  selector: 'app-alimentacion-consulta-form',
  templateUrl: './alimentacion-consulta-form.component.html',
  styleUrls: ['./alimentacion-consulta-form.component.css']
})
export class AlimentacionConsultaFormComponent implements OnInit {

  alimento: AlimentacionImpl = new AlimentacionImpl();

  constructor(private productoService: ProductoService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarAlimentacion();
    this.productoService.getAlimentacion(id).subscribe(response =>
      this.alimento = this.productoService.mapearAlimentos(response));
  }


  cargarAlimentacion(): string {
    return this.activatedRoute.snapshot.params['id'];
  }


}
