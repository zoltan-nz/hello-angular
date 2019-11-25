import { Injectable } from '@angular/core';
import { IProductsResponse } from '../models/product.interface';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import Product from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapter {
  url = '/api/products';

  constructor(private http: HttpClient) {}

  load$() {
    return this.http.get<IProductsResponse>(this.url).pipe(map(this.serialize));
  }

  private serialize(productsResponse: IProductsResponse): Product[] {
    return productsResponse.products.map(product => new Product(product));
  }
}
