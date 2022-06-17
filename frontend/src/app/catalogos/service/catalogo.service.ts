import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private host: string = environment.host;
  // private endCatalogo: string = `${this.host}catalogos/`;
  private endCatalogo: string = "https://vesselapi.herokuapp.com/api/catalogos";
  constructor(private http: HttpClient) { }

  getCatalogos():Observable<any>{
    return this.http.get<Catalogo[]>(this.endCatalogo);
  }

  getCatalogo(id: string):Observable<any>{
    return this.http.get<any>(`${this.endCatalogo}${id}/`);
  }

  mapearCatalogo(catalogoApi: any):CatalogoImpl{
    let catalogo:CatalogoImpl = new CatalogoImpl();
    let urlCatalogo = catalogoApi._links.catalogo.href;
    let urlProductos = catalogoApi._links.productos.href;
    let index = urlCatalogo.lastIndexOf('/');
    catalogo.id = urlCatalogo.substring(index+1);
    catalogo.descripcion = catalogoApi.descripcion;

    return catalogo;
  }

  extraerCatalogos(respuestaApi: any):Catalogo[]{
    let catalogos: Catalogo[] = [];
    respuestaApi._embedded.catalogos.forEach((c:any) =>{      
      catalogos.push(this.mapearCatalogo(c));
    });
    return catalogos;
  }


}
