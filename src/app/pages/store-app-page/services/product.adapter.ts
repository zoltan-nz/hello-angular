import { Injectable } from '@angular/core';
import { IProductsResponse } from '../models/product.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, retry } from 'rxjs/operators';
import Product from '../models/product.model';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductAdapter {
  url = '/api/products';

  constructor(private http: HttpClient) {}

  load$() {
    return this.http.get<IProductsResponse>(this.url).pipe(
      catchError((err, caught: Observable<IProductsResponse>) => this.handleError(err, caught)),
      map((response) => this.serialize(response))
    );
  }

  private serialize(productsResponse: IProductsResponse): Product[] {
    return productsResponse.products.map((product) => new Product(product));
  }

  private handleError(err: any, caught: Observable<IProductsResponse>) {
    return throwError('Sorry...');
  }
}
