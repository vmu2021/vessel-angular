import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alimentacion } from 'src/app/catalogos/models/alimentacion';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { ProductoService } from 'src/app/catalogos/service/producto.service';

@Component({
  selector: 'app-menajes-consultar-form',
  templateUrl: './menajes-consultar-form.component.html',
  styleUrls: ['./menajes-consultar-form.component.css']
})
export class MenajesConsultarFormComponent implements OnInit {

  alimentos: Alimentacion[] = [];
  menajes: MenajeImpl[] = [];
  alimentoVerDatos: AlimentacionImpl = new AlimentacionImpl();
  menajeVerDatos: MenajeImpl = new MenajeImpl();

  constructor(private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
    this.productoService.getProductosCatalogados(id).subscribe((res) =>
    this.alimentos = this.productoService.extraerAlimentos(res));
    this.productoService.getProductosCatalogados(id).subscribe((res) =>
    this.menajes = this.productoService.extraerMenaje(res));
  }

  onAlimentacionConsultar(alimento: AlimentacionImpl){
    this.verDatosAlimento(alimento);
    let url = `catalogos/alimentaciones/consultar/${alimento.idProducto}`;
    this.router.navigate([url])
  }

  verDatosAlimento(alimento: AlimentacionImpl): void {
    this.alimentoVerDatos = alimento;
  }

  onTelevisorConsultar(menaje: MenajeImpl){
    this.verDatosTelevisor(menaje);
    let url = `almacenes/televisores/consultar/${menaje.idProducto}`;
    this.router.navigate([url])
  }

  verDatosTelevisor(menaje: MenajeImpl): void {
    this.menajeVerDatos = menaje;
  }

}
