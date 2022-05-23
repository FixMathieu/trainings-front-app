import { Component, OnInit } from '@angular/core';
import { Training } from 'src/app/model/trainingsmodel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 
  total : number | undefined;
  cart: Training[] | undefined;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    console.log(this.cart);
    // this.total = this.cartService.getTotal();
  }
withdrawTraining(cartU : Training){
  this.cartService.deleteTraining(cartU);
  
}




}
