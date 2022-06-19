import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { CatalogoService } from '../service/catalogo.service';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.component.html',
  styles: []
})
export class CatalogosComponent implements OnInit {
  catalogos: Catalogo[] = [];

  constructor(private catalogoService: CatalogoService, private router:Router) { }

  ngOnInit(): void {
    // this.catalogoService.getCatalogos().subscribe(response =>{
    //   this.catalogos = this.catalogoService.extraerCatalogos(response);
    //   console.log(this.catalogoService.mapearCatalogo(response._embedded.catalogos[0]));
    //   console.log(this.catalogos)
  
    // });
    
    this.getCatalogos();
    console.log("HOLAAAA")
    
    
  }
  
  getCatalogos():void{
   this.catalogoService.getCatalogos().subscribe(data =>{
    this.catalogos = this.catalogoService.extraerCatalogos(data);
     console.log(this.catalogos)
   },
   err =>{
    console.log(err.error);
   });
   
  }

  eliminar(catalogo:Catalogo):void{
    this.catalogos = this.catalogos.filter(c => catalogo !== c);
    this.catalogoService.deleteCatalogo(catalogo).subscribe(response => {

      this.router.navigate(['/catalogos'])

  });
}
  
}
