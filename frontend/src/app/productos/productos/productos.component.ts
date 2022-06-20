import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { ProductoService } from 'src/app/catalogos/service/producto.service';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  alimentos: AlimentacionImpl[] = [];
  menajes: MenajeImpl[] = [];
  alimentosVerDatos: AlimentacionImpl = new AlimentacionImpl();
  menajeVerDatos: MenajeImpl = new MenajeImpl();


  constructor(
    private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService
  ) { }

  ngOnInit(): void {
    let id: string = this.activatedRoute.snapshot.params['id'];
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.alimentos= this.productoService.extraerAlimentos(res));
  this.productoService.getProductosCatalogados(id).subscribe((res) =>
  this.menajes = this.productoService.extraerMenaje(res));
  }

  onAlimentoEliminar(alimento: AlimentacionImpl){
    this.productoService.deleteAlimento(alimento.idProducto).subscribe();
  }

  onLavadoraEditar(alimento: AlimentacionImpl){
    this.alimentosVerDatos = alimento;
    let url = `catalogos/alimentos/editar/${alimento.idProducto}`;
    this.router.navigate([url])
  }

  onMenajeEliminar(menaje: MenajeImpl){
    this.productoService.deleteMenaje(menaje.idProducto).subscribe();
  }

  onMenajeEditar(menaje: MenajeImpl){
    this.menajeVerDatos = menaje;
    let url = `almacenes/menajes/editar/${menaje.idProducto}`;
    this.router.navigate([url])
  }

}
