import { Component } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';


@Component({
  templateUrl: './cart-receipt.component.html',
  styleUrls: ['./cart-receipt.component.css']
})
export class CartReceiptComponent {

  orderSent: boolean = false;
  sP: number = 6.50;

  constructor(public order: Order, public orderRepo: OrderRepository) { }

  confirmOrder() {
    this.orderRepo.saveOrder(this.order).subscribe(order => {
      this.order.clear();
      this.orderSent = true;
    })
  }

  get dateToday(): Date {
    let date = new Date();
    
    return date;

  }

  get checkoutTotal(): number {
    return this.order.cart.cartPrice;
  }

  get shippingProcessing(): number {
    return this.sP;
  }

  //this was fun todo (-_-)
  get stateSalesTax(): number {

    let tax
    let states: (string | number)[][] = [
      ["AK", 0.0910],
      ["AL", 0.0176],
      ["AZ", 0.0833],
      ["AR", 0.1002],
      ["CA", 0.0854],
      ["CO", 0.0752],
      ["CT", 0.0635],
      ["DE", 0.0000],
      ["DC", 0.0575],
      ["FL", 0.0680],
      ["GA", 0.0715],
      ["HI", 0.0435],      
      ["ID", 0.0603],
      ["IL", 0.0870],
      ["IA", 0.0680],
      ["IN", 0.0700],
      ["KS", 0.0868],
      ["KY", 0.0600],
      ["LA", 0.1002],
      ["MA", 0.0625],
      ["MD", 0.0600],
      ["ME", 0.0550],
      ["MI", 0.0600],
      ["MN", 0.0742],
      ["MO", 0.0600],
      ["MS", 0.0707],
      ["MT", 0.0000],
      ["NC", 0.0563],
      ["ND", 0.0680],
      ["NE", 0.0689],
      ["NH", 0.0000],
      ["NJ", 0.0660],
      ["NM", 0.0766],
      ["NV", 0.0814],
      ["NY", 0.0849],
      ["OH", 0.0715],
      ["OK", 0.0891],
      ["OR", 0.0000],
      ["PA", 0.0634],
      ["RI", 0.0700],
      ["SC", 0.0737],
      ["SD", 0.0640],
      ["TN", 0.0946],
      ["TE", 0.0817],
      ["UT", 0.0677],
      ["VT", 0.0618],
      ["VA", 0.0563],
      ["WA", 0.0918],
      ["WI", 0.0542],
      ["WV", 0.0637],
      ["WY", 0.0546]
    ];

    for (let i = 0; i < states.length; i++) {
      if (states[i][0] == this.order.state) tax = states[i][1];
    }

    return tax;
  }

  get grandTotal(): number {
    return this.checkoutTotal + this.shippingProcessing + (this.checkoutTotal * this.stateSalesTax);
  }


}
