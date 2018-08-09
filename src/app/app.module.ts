import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { StoreComponent } from './store/store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout.component';
import { RouterModule } from '@angular/router';
import { StoreFirstGuard } from './store/store-first.guard';
import { CartReceiptComponent } from './store/cart-receipt/cart-receipt.component';

@NgModule({
  declarations: [
    AppComponent,
    CartReceiptComponent
  ],
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store", component: StoreComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "cart", component: CartDetailComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "checkout", component: CartCheckoutComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "receipt", component: CartReceiptComponent,
        canActivate: [StoreFirstGuard]
      },
      {
        path: "admin",
        //When Angular processes the admin module, it will incorporate the routing information it contains into the overall set of routes and complete the navigation
        loadChildren: "app/admin/admin.module#AdminModule",
        canActivate: [StoreFirstGuard]
      },
      {
        path: "**", redirectTo: "/store"
      }
    ])
  ],
  providers: [StoreFirstGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
