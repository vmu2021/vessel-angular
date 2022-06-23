import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  faAdd,
  faEraser,
  faMagnifyingGlass,
  faPencilAlt,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/catalogos/models/producto';
import { ProductoImpl } from 'src/app/catalogos/models/producto-impl';
import { ProductoService } from 'src/app/catalogos/service/producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css'],
})
export class ProductoItemComponent implements OnInit {
  productos: Producto[] = [];
  producto$!: any;
  @Input() producto: Producto = new ProductoImpl();
  @Output() productoConsultar = new EventEmitter<ProductoImpl>();
  @Output() productoEditar = new EventEmitter<Producto>();
  @Output() productoEliminar = new EventEmitter<ProductoImpl>();
  constructor(
    private productoService: ProductoService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  eliminar(): void {
    if (confirm('¿Está seguro? Se borrará el producto y todo su contenido')) {
      this.productoEliminar.emit(this.producto);
    }
  }

  consultar(): void {
    this.productoConsultar.emit(this.producto);
  }

  editar(): void {
    this.productoEditar.emit(this.producto);
  }
  getProducto(): any {
    console.log(
      this.productoService.getProducto(
        this.activatedRoute.snapshot.params['id']
      )
    );
    return this.productoService.getProducto(
      this.activatedRoute.snapshot.params['id']
    );
  }

  pencil = faPencilAlt;
  lupa = faMagnifyingGlass;
  trash = faTrashCan;
  eraser = faEraser;
  plus = faAdd;
}
