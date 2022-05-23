import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cartmodel';
import { Customer } from 'src/app/model/customermodel';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  listCart :Cart[] | undefined

  constructor(public cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.listCart=[];
  }
onSaveCustomer(customer : Customer){
  console.log(customer);
}
}
