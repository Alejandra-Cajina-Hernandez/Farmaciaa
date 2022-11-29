import { Producto } from './Producto';
export class Almacenamiento{
    private cantidad=0;
    private Productos:any[]=[];

    constructor(cantidad:number){
        
        this.cantidad=cantidad;
    }
    public get_cantidad():number{
        return this.cantidad;
    }
    public set_cantidad(cantidad:number){
        this.cantidad=cantidad;
    }