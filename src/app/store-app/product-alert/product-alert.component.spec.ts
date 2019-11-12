import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAlertComponent } from './product-alert.component';

describe('ProductAlertComponent', () => {
  let component: ProductAlertComponent;
  let fixture: ComponentFixture<ProductAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAlertComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.product = { price: 600 };
    expect(component).toBeTruthy();
  });

  it('#shouldShowNotification', () => {
    component.product = { price: 600 };
    expect(component.shouldShowNotification()).toEqual(false);

    component.product = { price: 800 };
    expect(component.shouldShowNotification()).toEqual(true);
  });
});
