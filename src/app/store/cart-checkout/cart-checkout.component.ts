import { Component } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Order, PaymentType } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';
import { Product } from '../../model/product.model';
import { CartLineItem } from '../../model/cart.model';

@Component({
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public orderRepo: OrderRepository, public order: Order) { }

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
      this.orderRepo.saveOrder(this.order).subscribe( order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }    
  }
}
