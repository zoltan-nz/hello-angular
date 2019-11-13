import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface Customer {
  name: string;
  address: string;
}

@Component({
  selector: 'store-app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ['', Validators.required],
      address: '',
    });
  }

  ngOnInit() {}

  onSubmit(value: Customer) {
    console.warn('Submitted', value);
  }
}
