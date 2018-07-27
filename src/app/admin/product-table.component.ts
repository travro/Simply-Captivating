import { Component } from "../../../node_modules/@angular/core";
import { ProductRepository } from "../model/product.repository";
import { Product } from "../model/product.model";
import { ProductSortMethods } from "../model/product.sortmethods";


@Component({
    moduleId: module.id, 
    templateUrl: "product-table.component.html",
    styleUrls: ["product-table.component.css"]
})

export class ProductTableComponent{

    private selectedCategory : string;
    public sortMethod: any;
    public optionsRevealed: boolean;

    constructor(private repository: ProductRepository) {
        this.selectedCategory = "";
        this.sortMethod = ProductSortMethods.byNameAsc
        this.optionsRevealed = false;
     }

    getProducts(): Product[] {
        return this.repository.getProducts().sort((x, y) => this.sortMethod(x, y));
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }

    set category(cat: string) {
        this.selectedCategory = cat;
    }

    changeSortMethod(value: number) {
        
        switch(value){
            case 0: this.sortMethod = (this.sortMethod == ProductSortMethods.byNameAsc)? ProductSortMethods.byNameDesc: ProductSortMethods.byNameAsc; break;
            case 1: this.sortMethod = (this.sortMethod == ProductSortMethods.byPriceAsc)? ProductSortMethods.byPriceDesc: ProductSortMethods.byPriceAsc; break;
            case 2: this.sortMethod = (this.sortMethod == ProductSortMethods.byCategoryAsc)? ProductSortMethods.byCategoryDesc: ProductSortMethods.byCategoryAsc; break;
            default: this.sortMethod = ProductSortMethods.byNameAsc;
        }
    }

    toggleOptions(){
        this.optionsRevealed = !this.optionsRevealed;
    }

}