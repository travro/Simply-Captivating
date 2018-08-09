import { Component } from '@angular/core';
import { Order } from '../../model/order.model';
import { OrderRepository } from '../../model/order.repository';

@Component({
  templateUrl: './cart-receipt.component.html',
  styleUrls: ['./cart-receipt.component.css']
})
export class CartReceiptComponent  {

  orderSent: boolean = false;

  constructor(public order: Order, public orderRepo: OrderRepository) { }

  confirmOrder(){
    this.orderRepo.saveOrder(this.order).subscribe( order => {
      this.order.clear();
      this.orderSent = true;
    })
  }

}
