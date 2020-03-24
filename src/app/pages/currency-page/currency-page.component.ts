import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ha-currency-page',
  templateUrl: './currency-page.component.html',
  styleUrls: ['./currency-page.component.css'],
})
export class CurrencyPageComponent implements OnInit {
  currencyForm = this.fb.group({
    convertFrom: ['121234.78'],
    convertTo: ['5678.95'],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.currencyForm);
  }
}
