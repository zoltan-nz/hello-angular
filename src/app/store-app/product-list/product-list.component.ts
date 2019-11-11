import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'store-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: Product[] = products;

  share() {
    alert('Shared!');
  }

  onNotify() {
    alert('Notified!');
  }
}
