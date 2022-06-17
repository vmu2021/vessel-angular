import { Catalogo } from "./catalogo";

export class CatalogoImpl implements Catalogo {
    id!: string | number;  
    descripcion!: string;
    url?: string | undefined;
    _links?: string | undefined;
}
