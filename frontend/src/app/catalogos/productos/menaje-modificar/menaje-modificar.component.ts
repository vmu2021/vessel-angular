import { Component, Input ,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faPencilAlt, faCirclePlus, faPenNib } from '@fortawesome/free-solid-svg-icons';
import { Catalogo } from 'src/app/catalogos/models/catalogo';
import { CatalogoService } from 'src/app/catalogos/service/catalogo.service';
import { ProductoImpl } from '../../models/producto-impl';
import { MenajeImpl } from '../../models/menaje-impl';
import { ProductoService } from '../../service/producto.service';



@Component({
  selector: 'app-menaje-modificar',
  templateUrl: './menaje-modificar.component.html',
  styleUrls: ['./menaje-modificar.component.css']
})
export class MenajeModificarComponent implements OnInit {

  menaje: MenajeImpl = new MenajeImpl();
  catalogos: Catalogo[] = [];

  constructor(private productoService: ProductoService,
    private catalogoService: CatalogoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    let id: string = this.cargarMenaje();
    this.productoService.getMenaje(id).subscribe(res =>
      this.menaje = this.productoService.mapearMenaje(res));
    this.catalogoService.getCatalogos().subscribe((response) =>
      this.catalogos = this.catalogoService.extraerCatalogos(response));
  }

  cargarMenaje(): string {
    return this.activatedRoute.snapshot.params['id'];
  }

  onEditarMenaje(): void {
    this.productoService.updateMenaje(this.menaje).subscribe();
  }


  pencil=faPencilAlt;
  plus=faCirclePlus;
  cambio=faPenNib;
}
