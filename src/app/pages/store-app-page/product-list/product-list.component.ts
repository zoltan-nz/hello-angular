import { Component, OnInit } from '@angular/core';
import { computed } from 'mobx-angular';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'store-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductService],
})
export class ProductListComponent implements OnInit {
  @computed
  get isLoading() {
    return this.productService.isLoading;
  }

  @computed
  get products() {
    return this.productService.products;
  }
  errorMessage: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getAll().subscribe();
  }
}
