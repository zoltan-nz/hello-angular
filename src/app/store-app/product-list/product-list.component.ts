import { Component, OnInit } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'store-app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products = products;

  share() {
    alert('Shared!');
  }

  onNotify() {
    alert('Notified!');
  }
}
