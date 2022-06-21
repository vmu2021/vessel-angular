import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Alimentacion } from 'src/app/catalogos/models/alimentacion';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { Menaje } from 'src/app/catalogos/models/menaje';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { Producto } from 'src/app/catalogos/models/producto';
import { ProductoImpl } from 'src/app/catalogos/models/producto-impl';
import { ProductoService } from '../service/producto.service';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  // alimentos: Alimentacion[] = [];
  // menajes: Menaje[] = [];
  // alimentosVerDatos: AlimentacionImpl = new AlimentacionImpl();
  // menajeVerDatos: MenajeImpl = new MenajeImpl();
  productoVerDatos:Producto = new ProductoImpl();


  constructor(
    private activatedRoute: ActivatedRoute,
              private router : Router,
              private productoService: ProductoService
  ) { }

  ngOnInit(): void {


  this.productoService.getProductos().subscribe(response =>{
    this.productos = this.productoService.extraerProductos(response);
      
  });

 
  // this.productoService.getAlimentacion().subscribe(response =>{
  //   this.alimentos = this.productoService.extraerAlimentos(response);
  //   // console.log(this.alimentos);
  // });

  // this.productoService.getMenaje().subscribe(response => {
  //   this.menajes = this.productoService.extraerMenajes(response);
  //   // console.log(this.menajes);
  // })

 
  }
  getProductos():Observable<any>{
    return this.productoService.getProductos();
  }
  verDatos(producto:Producto):void{
    this.productoVerDatos = producto;
  }
  onProductoEditar(producto: ProductoImpl){
    this.productoVerDatos = producto;
    let url = `productos/editar/${producto.idProducto}`;
    this.router.navigate([url])
  }
  onProductoConsultar(producto: Producto) {
    this.verDatos(producto);
    let url = `producto/consultar/${producto.idProducto}`;
    this.router.navigate([url]);
  }

  // onAlimentoEliminar(alimento: AlimentacionImpl){
  //   this.productoService.deleteAlimento(alimento.idProducto).subscribe();
  // }

  // onLavadoraEditar(alimento: AlimentacionImpl){
  //   this.alimentosVerDatos = alimento;
  //   let url = `catalogos/alimentos/editar/${alimento.idProducto}`;
  //   this.router.navigate([url])
  // }



  onProductoEliminar(producto: ProductoImpl){
    this.productoService.deleteProducto(producto.idProducto).subscribe();
  }



}
