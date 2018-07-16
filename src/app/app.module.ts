import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store/store.module';
import { CartCheckoutComponent } from './store/cart-checkout/cart-checkout/cart-checkout.component';
import { CartDetailComponent } from './store/cart-detail/cart-detail/cart-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CartCheckoutComponent,
    CartDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
