import { Component } from '@angular/core';
import { Order } from '../../model/order.model';
import { CartLineItem } from '../../model/cart.model';

@Component({
  selector: 'purchase-table',
  templateUrl: './purchase-table.component.html',
  styleUrls: ['./purchase-table.component.css']
})
export class PurchaseTableComponent {

  constructor(public order: Order) { }

  get checkoutItems(): CartLineItem[] {
    return this.order.cart.lines;
  }

  get checkoutTotal(): number{
    return this.order.cart.cartPrice;
  }
}
