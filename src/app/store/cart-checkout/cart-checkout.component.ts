import { Component } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';

@Component({
  templateUrl: './cart-checkout.component.html',
  styleUrls: ['./cart-checkout.component.css']
})
export class CartCheckoutComponent {

  orderSent: boolean = false;
  submitted: boolean = false;

  constructor(public orderRepo: OrderRepository, public order: Order) { }

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
