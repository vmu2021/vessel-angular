import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { MenajeImpl } from '../models/menaje-impl';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;
  private urlEndPointLav: string = `${this.host}aliemntaciones`;
  private urlEndPointTel: string = `${this.host}menajes`;


  constructor(
    private http: HttpClient,
    ) { }


  getProductosCatalogados(id:string): Observable<any>{
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

  mapearAlimento(alimentoApi: any): AlimentacionImpl {

    let alimentoNuevo: AlimentacionImpl = new AlimentacionImpl();

    // lavadoraNueva.almacen=lavadoraApi._links.almacen.href;
    alimentoNuevo.urlProducto=alimentoApi.calificacionEnergetica;
    alimentoNuevo.idProducto= alimentoApi.capacidadCarga;
    alimentoNuevo.refrigerable= alimentoApi.marca;
    alimentoNuevo.descripcion= alimentoApi.modelo;
    alimentoNuevo.precio= alimentoApi.precio;
    // lavadoraNueva.urlProducto=lavadoraApi._links.self.href;
    alimentoNuevo.idProducto=this.getId(alimentoApi._links.alimento.href);
    return alimentoNuevo;
  }

  extraerAlimentos(respuestaApi: any): AlimentacionImpl[]{
    const alimentos: (AlimentacionImpl[]) = [];
    respuestaApi._embedded.alimentos.forEach((p: any) => {
      alimentos.push(this.mapearAlimento(p));
    });
    return alimentos;
  }

   //post
   addAlimento(alimento: AlimentacionImpl): Observable <any>{
    return this.http.post(this.urlEndPointLav, alimento).pipe(
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

  //delete
  deleteAlimento(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointLav}/${id}`).pipe(
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
//patch
  updateAlimento(lavadora: AlimentacionImpl){
    return this.http.patch<any>(`${this.urlEndPointLav}/${lavadora.idProducto}`, lavadora).pipe(
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

  //get

  getAlimento(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointLav}/${id}`).pipe(
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



  mapearMenaje(menajeApi: any): MenajeImpl {

    let menajeNuevo = new MenajeImpl();
menajeNuevo.catalogo= menajeApi.catalogo.descripcion;
    menajeNuevo.descripcion= menajeApi.marca;
    menajeNuevo.precio= menajeApi.precio;
    menajeNuevo.urlProducto=menajeApi.numeroPulgadas;
    menajeNuevo.idProducto=this.getId(menajeApi._links.menaje.href);
    return menajeNuevo;

  }

  extraerMenaje(respuestaApi: any): MenajeImpl[] {
    const menajes: MenajeImpl[] = [];
    respuestaApi._embedded.televisores.forEach((p: any) => {
      menajes.push(this.mapearMenaje(p));
    });
    return menajes;
  }

   //post menaje
   addMenaje(menaje: MenajeImpl): Observable <any>{
    return this.http.post(this.urlEndPointTel, menaje).pipe(
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

  //delete menaje
  deleteMenaje(id: string): Observable <any>{
    return this.http.delete(`${this.urlEndPointTel}/${id}`).pipe(
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
//patch televisor
  updateMenaje(menaje: MenajeImpl){
    return this.http.patch<any>(`${this.urlEndPointTel}/${menaje.idProducto}`, menaje).pipe(
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

  getMenaje(id:string): Observable<any>{
    return this.http.get<any>(`${this.urlEndPointTel}/${id}`).pipe(
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
getMetodoPersonalizado(reciclable:boolean, refrigerable:boolean): Observable<any>{
  return this.http.get<any>(`${this.urlEndPointTel}
  /search/buscar-productos?reciclado=${reciclable}&refrigerado=${refrigerable}`).pipe(
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


  // getProductosPagina(pagina: number): Observable<any> {
  //   return this.auxService.getItemsPorPagina(this.urlEndPoint, pagina);
  // }

  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

}
