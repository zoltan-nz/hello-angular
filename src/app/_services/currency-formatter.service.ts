import { Injectable } from '@angular/core';

const nativeNumberFormatter = new Intl.NumberFormat('en-NZ', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

@Injectable({
  providedIn: 'root',
})
export class CurrencyFormatterService {
  private _plainValue: string;
  private _formattedValue: string;

  constructor() {}

  set plainValue(value: string) {
    const proposedFormattedValue = nativeNumberFormatter.format(parseFloat(value));

    if (proposedFormattedValue === 'NaN') {
      this._plainValue = '';
      this._formattedValue = '';
    } else {
      this._formattedValue = proposedFormattedValue;
      this._plainValue = value;
    }
  }

  get plainValue(): string {
    return this._plainValue;
  }

  set formattedValue(formattedValue: string) {
    if (!formattedValue) {
      this.plainValue = '';
      return;
    }

    const onlyNumbersDotsAndNegatives = formattedValue.toString().replace(/[^0-9.-]+/g, '');
    const parsedValues = onlyNumbersDotsAndNegatives.match(/(\d+).(\d\d)/);

    if (parsedValues) {
      const [_, integerPart, decimalPart] = parsedValues;
      this.plainValue = Number(`${integerPart}.${decimalPart}`).toFixed(2);
      return;
    }

    this.plainValue = '';
  }

  get formattedValue(): string {
    return this._formattedValue;
  }
}
