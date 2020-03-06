import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import Product from '../models/product.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'store-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  isLoading: boolean;

  products: Product[];
  errorMessage: string;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.isLoading = true;

    this.productService.products$.pipe(finalize(() => (this.isLoading = false))).subscribe(
      (result) => (this.products = result),
      (err) => {
        this.errorMessage = err;
      }
    );
  }
}
