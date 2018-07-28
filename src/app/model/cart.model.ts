import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()

export class Cart {
    public lines: CartLineItem[] = [];
    public productCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product) {

        let line = this.lines.find(line => line.product.id == product.id);


        if ((line != undefined && line.quantity >= product.stock) || product.stock == 0) {
            alert("Sorry, not enough in stock");
        }
        else if (line != undefined && line.quantity < product.stock) {
            line.quantity += 1;
        }
        else {
            this.lines.push(new CartLineItem(product, 1));

        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.productCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.productCount = 0;
        this.cartPrice = 0;
        this.lines.forEach(l => {
            this.productCount += l.quantity;
            this.cartPrice += l.quantity * l.product.price;
        })
    }
}

export class CartLineItem {

    public product: Product;
    public quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    adjustQuantity(adjustment: number) {
        if ((this.quantity + adjustment) > this.product.stock) {
            alert("Sorry, not enough in stock")
        } else {
            this.quantity += adjustment;
            if (this.quantity < 0) this.quantity = 0;
        }


    }

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}
