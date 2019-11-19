import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.interface';

@Component({
  selector: 'store-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products$: Observable<IProduct[]>;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products$ = this.productService.products$;
  }
}
