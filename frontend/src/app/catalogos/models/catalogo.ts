import { Producto } from "./producto";

export interface Catalogo {
    idCatalogo:string;
    descripcion:string;
    urlCatalogo:string;
    productos:Producto[];
}
