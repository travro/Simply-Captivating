import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()

export class Order {
    public id: number;
    public firstname: string;
    public lastname: string;
    public address: string;
    public city: string;
    public state: string;
    public zip: string;
    public country: string;
    public shipped: boolean = false;

    public paymentMethod: PaymentType;

    public cardHolder: string;
    public cardNumber: string;
    public cardExp: Date;

    public bankAcctName: string;
    public bankAcctRout: string;
    public bankAcctNumber: string;

    constructor(public cart: Cart) { }
    
    clear() {
        this.id = null;
        this.firstname = this.lastname = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.paymentMethod = this.cardHolder = this.cardNumber = this.cardExp = this.bankAcctName = this.bankAcctNumber = this.bankAcctRout = null;
        this.shipped = false;
        this.cart.clear();
    }
}

export enum PaymentType{
    card,
    check
}