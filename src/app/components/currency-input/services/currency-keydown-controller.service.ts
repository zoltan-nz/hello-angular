import { Injectable } from '@angular/core';

const ALLOWED_CONTROL_KEYS = ['Tab', 'Enter', 'ArrowLeft', 'ArrowRight', 'Delete', 'Backspace'];
const CURRENCY_INPUT_INTEGER_LENGTH_LIMIT = 13;
const CURRENCY_INPUT_DECIMAL_LENGTH_LIMIT = 2;

@Injectable({
  providedIn: 'root',
})
export class CurrencyKeydownControllerService {
  constructor() {}

  public isKeypressAllowed($event: KeyboardEvent): boolean {
    const key = $event.key;

    if (this.isDot(key)) return this.processDot($event);
    if (this.isDigit(key)) return this.processDigit($event);

    if (this.isCopyPasteKeys($event)) return true;
    return this.isAllowedKey(key);
  }

  private isDot(code: string): boolean {
    return /\./.test(code);
  }

  private isDigit(code: string): boolean {
    return /\d/.test(code);
  }

  private isAllowedKey(code: string): boolean {
    return ALLOWED_CONTROL_KEYS.includes(code);
  }

  private processDot($event: KeyboardEvent): boolean {
    const target: HTMLInputElement = $event.target as HTMLInputElement;
    const { value, selectionStart, selectionEnd } = target;

    if (this.isInputEmpty(value)) return true;
    if (this.isDotSelectedForOverwrite(value, selectionStart, selectionEnd)) return true;
    if (this.isDotAllowedOnCursorPlace(value, selectionEnd)) return this.isTheFirstDot(value);

    return false;
  }

  private processDigit($event: KeyboardEvent): boolean {
    const target: HTMLInputElement = $event.target as HTMLInputElement;
    const { value, selectionStart, selectionEnd } = target;

    if (this.isInputEmpty(value)) return true;
    if (this.isTextSelected(selectionStart, selectionEnd)) return true;
    if (this.isDecimal(value, selectionEnd)) return this.isLessThanDecimalMaxLength(value);
    return this.isLessThanIntegerMaxLength(value);
  }

  private splitIntegerDecimal(value: string): string[] {
    return value.split('.');
  }

  private isInputEmpty(value: string): boolean {
    return !value;
  }

  private isTextSelected(selectionStart: number, selectionEnd: number): boolean {
    return selectionStart !== selectionEnd;
  }

  private isLessThanIntegerMaxLength(value: string): boolean {
    const [integerPart, decimalPart] = this.splitIntegerDecimal(value);
    return integerPart === undefined || integerPart?.length < CURRENCY_INPUT_INTEGER_LENGTH_LIMIT;
  }

  private isDecimal(value: string, selectionEnd: number): boolean {
    const [integerPart, decimalPart] = this.splitIntegerDecimal(value);
    return decimalPart !== undefined && integerPart?.length < selectionEnd;
  }

  private isLessThanDecimalMaxLength(value: string): boolean {
    const [integerPart, decimalPart] = this.splitIntegerDecimal(value);
    return decimalPart === undefined || decimalPart?.length < CURRENCY_INPUT_DECIMAL_LENGTH_LIMIT;
  }

  private isTheFirstDot(value: string): boolean {
    return !/\./.test(value);
  }

  private isDotAllowedOnCursorPlace(value: string, selectionEnd: number): boolean {
    return value.length - 2 <= selectionEnd;
  }

  private isDotSelectedForOverwrite(value: string, selectionStart: number, selectionEnd: number): boolean {
    return this.isTextSelected(selectionStart, selectionEnd) && this.isDotAllowedOnCursorPlace(value, selectionEnd);
  }

  private isCopyPasteKeys($event: KeyboardEvent) {
    return ($event.ctrlKey || $event.metaKey) && ['x', 'c', 'v'].includes($event.key);
  }
}
