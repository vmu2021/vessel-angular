import { registerLocaleData } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Catalogo } from '../models/catalogo';
import { CatalogoImpl } from '../models/catalogo-impl';
import { Producto } from '../models/producto';
import { ProductoService } from './producto.service';


@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;


constructor(
    private http: HttpClient, private productoService:ProductoService
) { }

getId(url: string):string{
      let posicionFinal: number = url.lastIndexOf('/');
      let numId:string = url.slice(posicionFinal + 1, url.length);
      return numId;
    }


getCatalogos(): Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
  }

mapearCatalogo(catalogoApi: any): CatalogoImpl {
  let catalogo: Catalogo = new CatalogoImpl();
  let urlCatalogo = catalogoApi._links.catalogo.href;
  let index = urlCatalogo.lastIndexOf('/');
  catalogo.urlCatalogo = urlCatalogo;
  catalogo.idCatalogo = urlCatalogo.substring(index+1);
  catalogo.descripcion = catalogoApi.descripcion;
  
  return catalogo;


}

extraerCatalogos(respuestaApi: any): Catalogo[] {
  const catalogos: Catalogo[] = [];
  respuestaApi._embedded.catalogos.forEach((c: any) => {
  catalogos.push(this.mapearCatalogo(c));
  });
  return catalogos;
}

crearCatalogo(catalogo: Catalogo): Observable<any>{
  return this.http.post(`${this.urlEndPoint}`, catalogo).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
      return throwError(()=> new Error(e));
    })
    );
}

deleteCatalogo(id: string): Observable<Catalogo> {
  return this.http
    .delete<Catalogo>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) =>{
      if(e.status ===400) {
        return throwError(()=> new Error (e));
      }
      if(e.roor.mensaje){
        console.error(e.error.mensaje);
      }
        return throwError(()=> new Error(e));
      })
    );
}


updateCatalogo(catalogo:Catalogo): Observable<any>{
  return this.http.patch<any>(`${this.urlEndPoint}/${catalogo.idCatalogo}`, catalogo).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
      })
    );
}

getCatalogo(id:string): Observable<any>{
  return this.http.get<any>(`${this.urlEndPoint}/${id}`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}
getCatalogoProductos(id:string):Observable<any> {
  return this.http.get<any>(`${this.urlEndPoint}/${id}/productos`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}

getCatalogosBuscados(descripcion:string, refrigerado:boolean): Observable<any>{
  return this.http.get<any>(`${this.host}alimentaciones/search/buscar-productos?descripcion=${descripcion}&refrigeado=${refrigerado}`).pipe(
    catchError((e) => {
      if (e.status === 400) {
        return throwError(() => new Error(e));
      }
      if (e.error.mensaje) {
        console.error(e.error.mensaje);
      }
      return throwError(() => new Error(e));
    })
  );
}

extraerCatalogosMetodo(respuestaApi: any): Catalogo[] {
  const almacenes: Catalogo[] = [];
  respuestaApi._embedded.catalogos.forEach((a: any) => {
  almacenes.push(this.mapearCatalogo(a));
  });
  return almacenes;
}



}
