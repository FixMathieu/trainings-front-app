import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Training } from '../model/trainingsmodel';


@Injectable({
  providedIn: 'root'
})
export class CartService {



  deleteTraining(cartU: Training) {
    console.log(cartU);
    console.log(this.cartU[cartU.id-1]);
    delete this.cartU[cartU.id-1];
    // localStorage.clear();
    // document.location.reload();
  }
 


  cartU: Training[]=[];
 

  constructor() { 
    let cart = localStorage.getItem('cartStorage');
    if (cart){
      this.cartU=JSON.parse(cart);
    }
  }

  addToCart(training:Training) {
    // localStorage.clear();
    this.cartU.push(training);
    // console.log(this.cartU);
    if(training.quantity>=1){
      localStorage.setItem('cartStorage',JSON.stringify(this.cartU));

    }else{
      // this.router.navigateByUrl('cart');
     window.location.href='/not-found/not-found.component.html';
    }
 
  }
getCart(){
  return this.cartU;
}
}

function cart(training: Training): string {
  throw new Error('Function not implemented.');
}

function id(id: any): string {
  throw new Error('Function not implemented.');
}
function save(){
  // for(let i=0;i<=cartU.Length;i++){
    // console.log(cartU);
  // }
    // localStorage.clear();
     
}
