import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Order } from '../../model/order.model';
import { CartLineItem } from '../../model/cart.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {

  
  submitted: boolean = false;

  constructor(public order: Order, private router: Router) { }

  get checkoutItems(): CartLineItem[] {
    return this.order.cart.lines;
  }

  get checkoutTotal(): number{
    return this.order.cart.cartPrice;
  }

  paymentSelection(method: number){
    this.order.paymentMethod = method;
  }
  
  
  submitOrder(form: NgForm) {
    this.submitted = true;
    if(form.valid) {
      this.router.navigateByUrl("/receipt");
      /*this.orderRepo.saveOrder(this.order).subscribe( order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })*/
    }   
  }
  
}
