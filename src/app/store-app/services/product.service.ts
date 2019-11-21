import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { IProduct } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = '/api/products';
  products$: Subscription;
  constructor(private http: HttpClient) {
    // this.products$ = this.loadProducts().subscribe(response => response);
  }

  loadProducts() {
    return this.http.get<IProduct[]>(this.url);
  }
}
