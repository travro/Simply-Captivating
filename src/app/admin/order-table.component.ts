import { Component } from "@angular/core";
import { OrderRepository } from "../model/order.repository";
import { Order } from "../model/order.model";
import { ProductRepository } from "../model/product.repository";

@Component({
    moduleId: module.id,
    templateUrl: "./order-table.component.html"
})

export class OrderTableComponent {
    includeShipped = false;

    constructor(private orderRepo: OrderRepository, private productRepo: ProductRepository) { }

    getOrders(): Order[] {
        return this.orderRepo.getOrders().filter(o => this.includeShipped || !o.shipped);
    }

    markShipped(order: Order) {
        order.shipped = true;
        this.orderRepo.updateOrder(order);
    }

    updateInventory(order: Order) {
        for (let cartLine of order.cart.lines) {
            let product = cartLine.product;
            product.stock -= cartLine.quantity;
            this.productRepo.saveProduct(product);
        }

    }

    delete(id: number) {
        this.orderRepo.deleteOrder(id);
    }
}