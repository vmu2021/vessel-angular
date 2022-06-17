import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hostname } from 'os';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private host: string = environment.host;
  private endCatalogo: string = `${this.host}catalogos/`
  constructor(private http: HttpClient) { }

  getCatalogos():Observable<any>{
    return this.http.get<any>(this.endCatalogo);
  }

  getCatalogo(id: string):Observable<any>{
    return this.http.get<any>(`${this.endCatalogo}${id}/`);
  }

  mapearCatalogo(catalogoApi: any):Catalogo{
    let catalogo = new CatalogoImpl();
    let urlCatalogo = catalogoApi._links.catalogos.href;
    let urlProductos = catalogoApi._links.productos.href;
    let index = urlCatalogo.lastIndexOf('/');
    catalogo.id = urlCatalogo.substring(index+1);
    catalogo.descripcion = catalogoApi.descripcion;
    return catalogo;
  }

  extraerCatalogos(respuestaApi: any):CatalogoImpl[]{
    let catalogos: CatalogoImpl[] = [];
    respuestaApi._embedded.catalogo.forEach((c) =>{
      let catalogo = this.mapearCatalogo(c);
      catalogos.push(catalogo);
    });
    return catalogos;
  }

  
}
