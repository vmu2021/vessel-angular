import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogo } from '../models/catalogo';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogo-item',
  templateUrl: './catalogo-item.component.html',
  styles: []
})
export class CatalogoItemComponent implements OnInit {
  catalogo$?: Observable<Catalogo>;

  constructor(private catalogoService:CatalogoService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.loadCatalogo();
  }

  loadCatalogo():any {
    this.catalogoService.getCatalogo(this.activatedRoute.snapshot.params['id']).subscribe(response =>{
      console.log(response);
    });
    return this.catalogoService.getCatalogo(this.activatedRoute.snapshot.params['id']);
  
  }

}
