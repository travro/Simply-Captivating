import { Product } from './product.model';

export class ProductSortMethods{
    public static byName = function(product1: Product, product2: Product){
        if(product1.name < product2.name) return -1;
        else if(product1.name > product2.name) return 1;
        else return 0;
    }
    
    public static byPriceAsc = function(product1: Product, product2: Product){
        if(product1.price < product2.price) return -1;
        else if(product1.price > product2.price) return 1;
        else return 0;
    }

    public static byPriceDesc = function(product1: Product, product2: Product){
        if(product1.price > product2.price) return -1;
        else if(product1.price < product2.price) return 1;
        else return 0;
    }
}

