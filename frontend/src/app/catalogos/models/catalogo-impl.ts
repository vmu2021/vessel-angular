import { Catalogo } from "./catalogo";

export class CatalogoImpl implements Catalogo {
    id!: string;      
    descripcion!: string;
    // productos!: any[];
    url?: string | undefined;
    _links?: string | undefined;

//    constructor(descripcion:string,id:string){
//     this.id = id;
//     this.descripcion = descripcion;
 
//    }

    
}
