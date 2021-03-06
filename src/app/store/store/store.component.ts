import { Component } from "@angular/core";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import { ProductSortMethods } from "../../model/product.sortmethods";
import { Cart } from "../../model/cart.model";
import { Router } from "@angular/router";


@Component({
    selector: "store",
    moduleId: module.id,
    templateUrl: "store.component.html",
    styleUrls: ["store.component.css"]
})

export class StoreComponent {
    
    private repository : ProductRepository
    private cart : Cart
    private router : Router
    private selectedCategory: string;
    public productsPerPage: number;
    public selectedPage: number;
    private sortMethod: any;

    
    constructor(repository: ProductRepository, cart: Cart, router: Router ) {
        this.repository = repository;
        this.cart = cart;
        this.router = router;
        this.selectedCategory = null;
        this.productsPerPage = 50;
        this.selectedPage = 1;
        this.sortMethod = ProductSortMethods.byNameAsc;
     }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage;
        this.selectedPage = 1;
        return this.repository.getProducts(this.selectedCategory).sort((x, y) => this.sortMethod(x, y)).slice(pageIndex, pageIndex + this.productsPerPage);      
    }
    get categories(): string[] {
        return this.repository.getCategories();
    }

    get categorySelected(): string {
        return this.selectedCategory;
    }

    changeCategory(newCategory?: string) {
        this.selectedCategory = (newCategory == "") ? null : newCategory;
    }

    changePage(newPage: number) {
        this.selectedPage = newPage
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository.getProducts(this.selectedCategory).length / this.productsPerPage);
    }

    changeSortMethod(value: number) {
        if (value == 0) this.sortMethod = ProductSortMethods.byNameAsc;
        else if (value == 1) this.sortMethod = ProductSortMethods.byNameDesc;
        else if (value == 2) this.sortMethod = ProductSortMethods.byPriceAsc;
        else if (value == 3) this.sortMethod = ProductSortMethods.byPriceDesc
        else this.sortMethod = ProductSortMethods.byNameAsc;
    }

    get sortedBy(): string {
        if (this.sortMethod == ProductSortMethods.byNameAsc) return "Name Asc.";
        else if( this.sortMethod == ProductSortMethods.byNameDesc) return "Name Desc.";
        else if (this.sortMethod == ProductSortMethods.byPriceAsc) return "Price Asc.";
        else if (this.sortMethod == ProductSortMethods.byPriceDesc) return "Price Desc.";
        else return "Name";
    }

    addItemToCart(product: Product) {
        this.cart.addLine(product);
        //this.router.navigateByUrl("/checkout");
    }
}