import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReceiptComponent } from './cart-receipt.component';

describe('CartReceiptComponent', () => {
  let component: CartReceiptComponent;
  let fixture: ComponentFixture<CartReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
