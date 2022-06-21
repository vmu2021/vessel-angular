import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { Alimentacion } from 'src/app/catalogos/models/alimentacion';
import { AlimentacionImpl } from 'src/app/catalogos/models/alimentacion-impl';
import { Menaje } from 'src/app/catalogos/models/menaje';
import { MenajeImpl } from 'src/app/catalogos/models/menaje-impl';
import { Producto } from 'src/app/catalogos/models/producto';
import { ProductoImpl } from 'src/app/catalogos/models/producto-impl';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private host: string = environment.host;
  private urlEndpoint: string = `${this.host}productos/`;
  private urlAlimentacion: string = `${this.host}alimentacion/`;
  private urlMenajes: string = `${this.host}menajes/`;
  
  constructor(private http: HttpClient) { 

  }

  getProductos():Observable<any> {
return this.http.get<any>(this.urlEndpoint);
  }

  getProducto(id:string):Observable<any>{
    return this.http.get<any>(`${this.urlEndpoint}${id}`).pipe(
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

  getAlimentacion():Observable<any> {
return this.http.get<any>(this.urlAlimentacion);
  }

  getMenaje():Observable<any> {
    return this.http.get<any>(this.urlMenajes);
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
      .delete<Producto>(`${this.urlEndpoint}/${id}`).pipe(
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
    return this.http.patch<any>(`${this.urlEndpoint}/${producto.idProducto}`, producto).pipe(
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
