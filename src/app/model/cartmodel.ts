export class Cart{
    id : number;
    name : string;
    description : string;
    price : number;
    quantity:number ;
    totality:number;

    constructor(id:number,name:string,description:string,price:number,quantity:number,totality:number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity=quantity;
        this.totality=totality;
    }
};