import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { StaticDataSource } from "./static.datasource";
import { Order } from "./order.model";

@Injectable()
export class OrderRepository {

  private dataSource: StaticDataSource
  private orders : Order[] = [];

  constructor(dataSource: StaticDataSource) {
    this.dataSource = dataSource;
  }

  getOrders() : Order[] {
    return this.orders;
  }

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }

}
