import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Training } from 'src/app/model/trainingsmodel';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {
  listTrainings: Training[] | undefined;
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.listTrainings = [
      { id: 1, name: 'Java', description: 'Formation Java SE 8 sur 5 jours', price: 1500, quantity: 1 ,totalttc:0},
      { id: 2, name: 'DorNet', description: 'Formation DotNet 3 jours', price: 1000, quantity: 1,totalttc:0 },
      { id: 3, name: 'Python', description: 'Formation Python/Django 5 jours', price: 1500, quantity: 1,totalttc:0 }
    ];
  }
  onAddToCart(training: Training) {
    // console.log(training.name)
    // console.log(training.quantity);
    
    this.cartService.addToCart(training);
    this.router.navigateByUrl('cart');
  }
}
