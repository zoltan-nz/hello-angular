import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { action, observable } from 'mobx-angular';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { IProductsResponse } from '../_models/product.interface';
import Product from '../_models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapter {
  url = '/api/products';

  @observable isLoading = false;

  constructor(private http: HttpClient) {}

  private buildUrl(categoryId: string) {
    return `/api/categories/${categoryId}/products`;
  }

  load$() {
    return this.http.get<IProductsResponse>(this.url).pipe(catchError(this.handleError), map(this.serialize));
  }

  @action
  loadByCategoryId$(categoryId: string) {
    this.isLoading = true;
    return this.http.get<IProductsResponse>(this.buildUrl(categoryId)).pipe(
      map(this.serialize),
      finalize(() => (this.isLoading = false))
    );
  }

  private serialize = (productsResponse: IProductsResponse): Product[] =>
    productsResponse.products.map((product) => new Product(product));

  private handleError = (err: any, caught: Observable<IProductsResponse>) => throwError('Sorry...');
}
