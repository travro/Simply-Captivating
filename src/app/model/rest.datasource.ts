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

    baseUrl: string;
    auth_token: string;


    constructor(private http: Http) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;

    }

    authenticate(user: string, pass: string): Observable<boolean> {
        return this.http.request(new Request({
            method: RequestMethod.Post,
            url: this.baseUrl + "login",
            body: { name: user, password: pass }
        })).map(response => {
            let r = response.json();
            this.auth_token = r.success ? r.token : null;
            return r.success;
        })
    }

    /**
     * Product Operations
     */

    getProducts(): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "products");
    }

    saveProduct(product: Product): Observable<any> {
        return this.sendRequest(RequestMethod.Post, "products", product, true);
    }

    updateProduct(product): Observable<any> {
        return this.sendRequest(RequestMethod.Put, `products/${product.id}`, product, true);
    }

    deleteProduct(id: number): Observable<any> {
        return this.sendRequest(RequestMethod.Delete, `products/${id}`, null, true);
    }


    /**
     * Inventory Operations
     */
    updateInventory(order: Order) {
        for (let cartLine of order.cart.lines) {
            let product = cartLine.product;
            product.stock -= cartLine.quantity;
            this.updateProduct(product);
        }
    }

    /**
     * Order Operations
     */

    getOrders(): Observable<any> {
        return this.sendRequest(RequestMethod.Get, "orders", null, true);
    }

    //Called by order.repository upon finalizing a checkout
    saveOrder(order: Order): Observable<any> {
        //INVENTORY UPDATE : WHY DOES IT WORK HERE..................
        return this.sendRequest(RequestMethod.Post, "orders", order);
    }

    //Called by order.respository upon shipment
    updateOrder(order: Order): Observable<any> {
        ///BUT NOT HERE????
        return this.sendRequest(RequestMethod.Put, `orders/${order.id}`, order, true);
    }

    deleteOrder(id: number): Observable<any> {
        return this.sendRequest(RequestMethod.Delete, `orders/${id}`, null, true);
    }



    private sendRequest(verb: RequestMethod, url: string, body?: Product | Order, auth: boolean = false): Observable<Product | Product[] | Order | Order[]> {
        let request = new Request({
            method: verb,
            url: this.baseUrl + url,
            body: body
        });

        if (auth && this.auth_token != null) {
            request.headers.set("Authorization", `Bearer<${this.auth_token}>`);
        }
        return this.http.request(request).map(response => response.json());
    }
}