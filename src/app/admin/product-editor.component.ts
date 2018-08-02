import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { ActivatedRoute, Router } from "@angular/router";
import { NgForm } from "@angular/forms";


@Component({
    moduleId: module.id,
    templateUrl: "./product-editor.component.html"
})

export class ProductEditorComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository, private router: Router, activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product, repository.getProduct(activeRoute.snapshot.params["id"]));
        }
    }
    save(form: NgForm) {
        this.repository.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }

    deleteProduct(id: number) {
        this.repository.deleteProduct(id);
    }
}

/**
 * Attempt to add this product
 * LipSmooth™ Conditioning Polish
 * Lips
 * Helps dry, damaged lips feel renewed and re-moisturized by exfoliating and conditioning
 * https://lh3.googleusercontent.com/AiEkByWdkDye8KQ3wxsnR_I-6bp5MEt7PeGwrDMG1sd3YTR8Lg-tQ9qCbK-_ipMAqs6wZLDcty8FYH3_kXHyOYouqQxuNYH-Ra1N-xEPsvySrBxHkubaYhibxUAQf7frYSLeItF5VA=w2400
 * 25
 */
