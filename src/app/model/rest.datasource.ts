import { Injectable } from "@angular/core";
import { Http, Request, RequestMethod } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Product } from "./product.model";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import "rxjs/add/operator/map";

const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {

   /* baseUrl: string;*/
    _url: string;


    constructor(private http: Http) {
        /*this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;*/
        this._url = "products.json";
        
    }

    getProducts(): Observable<Product[]>{
        return this.http.get(this._url).map((response) => response.json());
    }

    saveOrder(order: Order): Observable<Order>{
        return this.http.request(new Request({
            method: "post",
            url: "orders.json",
            body: order
        })).map(response => response.json());
    }

    /**
     * 
     * 


    getProducts(): Observable<Product[]> {
        return this.sendProductRequest(RequestMethod.Get, "products");
    }

    saveOrder(order: Order): Observable<Order> {
        return this.sendOrderRequest(RequestMethod.Post, "orders", order);
    }

    private sendProductRequest(verb: RequestMethod, url: string): Observable<Product[]> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url
        })).map(response => response.json());
    }

    private sendOrderRequest(verb: RequestMethod, url: string, body: Product | Order): Observable<Order> {
        return this.http.request(new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        })).map(response => response.json());
    }*/
}