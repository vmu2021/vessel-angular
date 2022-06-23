import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Alimentacion } from '../models/alimentacion';
import { AlimentacionImpl } from '../models/alimentacion-impl';
import { Menaje } from '../models/menaje';
import { MenajeImpl } from '../models/menaje-impl';
import { Producto } from '../models/producto';
import { ProductoImpl } from '../models/producto-impl';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private host: string = environment.host;
  private urlEndPoint: string = `${this.host}catalogos`;
  private urlEndPointAli: string = `${this.host}aliemntaciones`;
  private urlEndPointMen: string = `${this.host}menajes`;


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

  // extraerAlimentos(respuestaApi: any): AlimentacionImpl[]{
  //   const alimentos: (AlimentacionImpl[]) = [];
  //   respuestaApi._embedded.alimentos.forEach((p: any) => {
  //     alimentos.push(this.mapearAlimento(p));
  //   });
  //   return alimentos;
  // }

   //post
   addAlimento(alimento: AlimentacionImpl): Observable <any>{
    return this.http.post(this.urlEndPointAli, alimento).pipe(
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
    return this.http.delete(`${this.urlEndPointAli}/${id}`).pipe(
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
    return this.http.patch<any>(`${this.urlEndPointAli}/${lavadora.idProducto}`, lavadora).pipe(
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
    return this.http.get<any>(`${this.urlEndPointAli}/${id}`).pipe(
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



//   mapearMenaje(menajeApi: any): MenajeImpl {

//     let menajeNuevo = new MenajeImpl();
// menajeNuevo.catalogo= menajeApi.catalogo.descripcion;
//     menajeNuevo.descripcion= menajeApi.marca;
//     menajeNuevo.precio= menajeApi.precio;
//     menajeNuevo.urlProducto=menajeApi.numeroPulgadas;
//     menajeNuevo.idProducto=this.getId(menajeApi._links.menaje.href);
//     return menajeNuevo;

//   }

  extraerMenaje(respuestaApi: any): MenajeImpl[] {
    const menajes: MenajeImpl[] = [];
    respuestaApi._embedded.televisores.forEach((p: any) => {
      menajes.push(this.mapearMenaje(p));
    });
    return menajes;
  }

   //post menaje
   addMenaje(menaje: MenajeImpl): Observable <any>{
    return this.http.post(this.urlEndPointMen, menaje).pipe(
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
    return this.http.delete(`${this.urlEndPointMen}/${id}`).pipe(
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
    return this.http.patch<any>(`${this.urlEndPointMen}/${menaje.idProducto}`, menaje).pipe(
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

  // getMenaje(id:string): Observable<any>{
  //   return this.http.get<any>(`${this.urlEndPointMen}/${id}`).pipe(
  //     catchError((e) => {
  //       if (e.status === 400) {
  //         return throwError(() => new Error(e));
  //       }
  //       if (e.error.mensaje) {
  //         console.error(e.error.mensaje);
  //       }
  //       return throwError(() => new Error(e));
  //     })
  //   );
  // }
getMetodoPersonalizado(reciclable:boolean, refrigerable:boolean): Observable<any>{
  return this.http.get<any>(`${this.urlEndPointMen}
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


  getId(url:string): string {
    let posicionFinal: number = url.lastIndexOf('/');
    let numId: string = url.slice(posicionFinal + 1, url.length);
    return numId;
  }

  
    getProductos():Observable<any> {
  return this.http.get<any>(this.urlEndPoint);
    }
  
    getProducto(id:string):Observable<any>{
      return this.http.get<any>(`${this.urlEndPoint}${id}`).pipe(
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
  
    getAlimentacion(id:any):Observable<any> {
  return this.http.get<any>(this.urlEndPointAli);
    }
  
    getMenaje():Observable<any> {
      return this.http.get<any>(this.urlEndPointAli);
    }
    mapearProducto(productoApi: any): ProductoImpl{
      let producto: Producto = new ProductoImpl();
      let urlProducto = productoApi._links.self.href;
      let index = urlProducto.lastIndexOf('/');
      producto.descripcion = productoApi.descripcionProducto;
      producto.precio = productoApi.precio;
      producto.tipoProducto = productoApi.tipoProducto;
      producto.urlProducto = urlProducto;
      producto.idProducto = urlProducto.substring(index+1);
  
      return producto;
    }
    mapearAlimentos(alimentacionApi: any):AlimentacionImpl{
      let alimento: AlimentacionImpl = new AlimentacionImpl();
      let urlAlimento = alimentacionApi._links.self.href;
      let index = urlAlimento.lastIndexOf('/');
      alimento.idProducto = urlAlimento.substring(index+1);
      alimento.descripcion = alimentacionApi.descripcionProducto;
      alimento.precio = alimentacionApi.precio;
      alimento.refrigerable = alimentacionApi.refrigerable;
  
      return alimento;
    }
  
  
    mapearMenaje(menajeApi: any):MenajeImpl{
      let menaje: MenajeImpl = new MenajeImpl();
      let urlMenaje = menajeApi._links.self.href;
      let index = urlMenaje.lastIndexOf('/');
      menaje.idProducto = urlMenaje.substring(index+1);
      menaje.descripcion = menajeApi.descripcionProducto;
      menaje.precio = menajeApi.precio;
      menaje.reciclable = menajeApi.reciclable;
  
      return menaje;
    }
    
    extraerProductos(respuestaApi:any): Producto[] {
      let productos: Producto[] = [];
      respuestaApi._embedded.productos.forEach((p:any) =>{
        productos.push(this.mapearProducto(p));
      });
      return productos;
    }
  
    extraerAlimentos(respuestaApi:any): Alimentacion[] {
      let alimentos: Alimentacion[] = [];
      respuestaApi._embedded.alimentos.forEach((p:any) =>{
        alimentos.push(this.mapearAlimentos(p));
      });
      return alimentos;
    }
  
    extraerMenajes(respuestaApi:any): Menaje[] {
      let menajes: Menaje[] = [];
      respuestaApi._embedded.menajes.forEach((p:any) =>{
        menajes.push(this.mapearMenaje(p));
      });
      return menajes;
    }
  
    deleteProducto(id: string): Observable<Producto> {
      return this.http
        .delete<Producto>(`${this.urlEndPoint}/${id}`).pipe(
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
    
    
    updateProducto(producto:Producto): Observable<any>{
      return this.http.patch<any>(`${this.urlEndPoint}/${producto.idProducto}`, producto).pipe(
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
}
