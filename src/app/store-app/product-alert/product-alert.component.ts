import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'store-app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.scss'],
})
export class ProductAlertComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  shouldShowNotification() {
    return this.product && this.product.price && this.product.price > 700;
  }
}
