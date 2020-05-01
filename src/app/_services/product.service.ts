import { Injectable } from '@angular/core';
import { action, computed, observable } from 'mobx-angular';
import { map } from 'rxjs/operators';
import Product from '../_models/product.model';
import { ProductAdapter } from './product.adapter';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  @observable products: Product[];

  @computed
  get isLoading() {
    return this.productAdapter.isLoading;
  }

  constructor(private productAdapter: ProductAdapter) {}

  @action
  getAll() {
    return this.productAdapter.load$().pipe(map((products) => (this.products = products)));
  }

  @action
  getAllByCategoryId(categoryId: string) {
    return this.productAdapter.loadByCategoryId$(categoryId).pipe(map((products) => (this.products = products)));
  }
}
