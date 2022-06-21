import { Catalogo } from "./catalogo";
import { Producto } from "./producto";

export class CatalogoImpl implements Catalogo {
    idCatalogo!: string;
    descripcion!: string;
    urlCatalogo!: string;
    productos!: Producto[];
    constructor(){

    }
    
}
