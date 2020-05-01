import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface ICustomer {
  name: string;
  address: string;
}

@Component({
  selector: 'store-app-cart',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: '',
    });
  }

  ngOnInit() {}

  onSubmit(value: ICustomer) {
    console.warn('Submitted', value);
  }
}
