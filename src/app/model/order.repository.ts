import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { RestDataSource } from "./rest.datasource";
import { Order } from "./order.model";

@Injectable()
export class OrderRepository {

  private dataSource: RestDataSource
  private orders: Order[] = [];
  private loaded: boolean = false;

  constructor(dataSource: RestDataSource) {
    this.dataSource = dataSource;
  }

  //gets orders from respository, ensures that the request isn't sent to the RESTful service until 
  //authentication has been performed
  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(orders => this.orders = orders);
  }

  getOrders(): Order[] {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.orders;
  }

  //Called by cart-checkout.component upon finalizing an order
  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

  //Called by order-table.component upon shipment
  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => o.id == order.id), 1, order);
    });
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.orders.splice(this.orders.findIndex(o => id == o.id), 1);
    });
  }

}
