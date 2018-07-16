import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Cart } from "../../model/cart.model";

@Component({
    selector: "cart-summary",
    moduleId: module.id,
    templateUrl: "cart-summary.component.html",
    styleUrls:["cart-summary.component.css"]
})

export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}