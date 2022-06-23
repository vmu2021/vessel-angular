import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentacion } from '../models/alimentacion';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { MenajeImpl } from '../models/menaje-impl';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-productos-consulta',
  templateUrl: './productos-consulta.component.html',
  styleUrls: ['./productos-consulta.component.css']
})
export class ProductosConsultaComponent implements OnInit {

  alimentaciones: Alimentacion[] = [];
  menajes: MenajeImpl[] = [];
  alimentacionVerDatos: AlimentacionImpl = new AlimentacionImpl();
  menajeVerDatos: MenajeImpl = new MenajeImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.productoService.getProductosCatalogados(id).subscribe((res) =>
    this.alimentaciones = this.productoService.extraerAlimentos(res));
    this.productoService.getProductosCatalogados(id).subscribe((res) =>
    this.menajes = this.productoService.extraerMenaje(res));
  }

  onAlimentacionConsultar(alimento: AlimentacionImpl){
    this.verDatosAlimentacion(alimento);
    let url = `catalogos/alimentaciones/consultar/${alimento.idProducto}`;
    this.router.navigate([url])
  }

  verDatosAlimentacion(alimento: AlimentacionImpl): void {
    this.alimentacionVerDatos = alimento;
  }

  onMenajeConsultar(menaje: MenajeImpl){
    this.verDatosMenaje(menaje);
    let url = `catalogos/televisores/consultar/${menaje.idProducto}`;
    this.router.navigate([url])
  }

  verDatosMenaje(menaje: MenajeImpl): void {
    this.menajeVerDatos = menaje;
  }

}
