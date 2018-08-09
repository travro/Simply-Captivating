import { Component } from '@angular/core';
import { Order } from '../../../model/order.model';

@Component({
  templateUrl: './cart-receipt.component.html',
  styleUrls: ['./cart-receipt.component.css']
})
export class CartReceiptComponent  {

  constructor(public order: Order) { }

  

}
