import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { StoreComponent } from './store/store/store.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { StoreFirstGuard } from './store/store-first.guard';

@NgModule({
  declarations: [
    AppComponent
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
        path: "chekcout", component: CartCheckoutComponent,
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
