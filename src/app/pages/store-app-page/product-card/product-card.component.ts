import { Component, Input, OnInit } from '@angular/core';
import Product from '../models/product.model';

@Component({
  selector: 'store-app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  constructor() {}

  ngOnInit() {}
}
