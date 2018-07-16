import { Injectable } from "@angular/core";
import { Product } from "./product.model";


@Injectable()

export class Cart {
    public lines: CartLine[] = [];
    public productCount: number = 0;
    public cartPrice: number = 0;

    addLine(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.name == product.name);

        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();

    }
    updateQuantity(product : Product, quantity: number) {
        let line = this.lines.find(line => line.product.name == product.name);
        if( line != undefined){
            line.quantity = Number(quantity);
        }
        this.recalculate();
    }

    removeLine(name: string) {
        let index = this.lines.findIndex( line => line.product.name == name);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear(){
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

export class CartLine {

    public product: Product;
    public quantity: number;

    constructor(product: Product, quantity: number) {
        this.product = product;
        this.quantity = quantity;
    }

    adjustQuantity(adjustment : number){   
        this.quantity += adjustment;
        if(this.quantity < 0) this.quantity = 0;        
    }

    get lineTotal() {
        return this.quantity * this.product.price;
    }
}
