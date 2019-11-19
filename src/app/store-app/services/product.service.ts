import { Injectable } from '@angular/core';
import { products } from '../mocked-data/products';
import { Observable, of } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products$: Observable<IProduct[]>;
  constructor() {
    this.products$ = of(products);
  }
}
