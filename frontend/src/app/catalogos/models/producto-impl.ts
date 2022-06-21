import {Producto} from "./producto";

export class ProductoImpl implements Producto {
    catalogo!: string;
    descripcion!: string;
    precio!: number;
    idProducto!: string;
    urlProducto?: string;
    tipoProducto?: string;

    constructor(){}
}
