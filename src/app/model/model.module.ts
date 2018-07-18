import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpModule } from "@angular/http";

@NgModule({
    imports: [HttpModule],

    //when Angular detects a StaticDataSource constructor is will use RestDataSourceInstead
    providers: [ProductRepository, Cart, Order, OrderRepository, {provide: StaticDataSource, useClass: RestDataSource}]
})
export class ModelModule { }