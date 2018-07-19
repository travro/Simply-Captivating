import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class ProductRepository {

    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource) {
        dataSource.getProducts().subscribe(data => {
            this.products = data;
            this.categories = data.map(p => p.category).filter((c, index, array) => array.indexOf(c) == index).sort();
        });
    }

    getProducts(category: string = null): Product[] {
        return this.products.filter(p => category == null || category == p.category);
    }

    getProduct(name: string): Product {
        return this.products.find(p => p.name == name);
    }

    saveProduct(product: Product) {
        if(product.name == null || product.name == "") {
            this.dataSource.saveProduct(product).subscribe(p => this.products.push(p));
        }else{
            this.dataSource.updateProduct(product).subscribe(p => {
                this.products.splice(this.products.findIndex(p => p.name == product.name), 1, product);
            });
        }
    }

    deleteProduct(name: string){
        this.dataSource.deleteProduct(name).subscribe(p => {
            this.products.splice(this.products.findIndex(p => p.name == name), 1);
        })
    }

    getCategories(): string[] {
        return this.categories;
    }

}