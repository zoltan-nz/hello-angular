import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { ProductDetailsComponent } from './product-details.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from '../../testing/activated-route-stub';

describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailsComponent],
      providers: [{ provide: ActivatedRoute, useValue: new ActivatedRouteStub({ productId: 1 }) }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
