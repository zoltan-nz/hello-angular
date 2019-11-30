import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import Product from '../models/product.model';
import { ProductAdapter } from './product.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public products$: Observable<Product[]> = this.productAdapter.load$();

  constructor(private productAdapter: ProductAdapter) {}
}
