export class Training{
    id : number;
    name : string;
    description : string;
    price : number;
    quantity:number ;
    totalttc: number;
  
  

  
    constructor(id:number,name:string,description:string,price:number,quantity:number,totalttc:number){
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.quantity=quantity;
        this.totalttc=totalttc;
    }
};