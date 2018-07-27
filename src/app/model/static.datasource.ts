import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/from";
import { Order } from './order.model';


@Injectable()

export class StaticDataSource {

	private products: Product[] = [

		new Product()

	];

	getProducts(): Observable<Product[]> {
		return Observable.from([this.products]);
	}

	saveOrder(order: Order): Observable<Order> {
		console.log(JSON.stringify(order));
		return Observable.from([order]);
	}

}