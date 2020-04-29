import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CurrencyFormatterService } from '../services/currency-formatter.service';
import { CurrencyKeydownControllerService } from '../services/currency-keydown-controller.service';

@Directive({
  selector: '[currencyFormat]',
})
export class CurrencyFormatDirective implements OnInit {
  private el: HTMLInputElement;

  constructor(
    private elementRef: ElementRef<HTMLInputElement>,
    private ngControl: NgControl,
    private currencyFormatter: CurrencyFormatterService,
    private currencyKeydownController: CurrencyKeydownControllerService
  ) {
    this.el = elementRef.nativeElement;
  }

  ngOnInit(): void {
    this.currencyFormatter.formattedValue = this.ngControl.value;
    this.el.value = this.currencyFormatter.formattedValue;
  }

  @HostListener('focus')
  onFocus() {
    this.currencyFormatter.formattedValue = this.el.value;
    this.el.value = this.currencyFormatter.plainValue;
  }

  @HostListener('blur')
  onBlur() {
    this.currencyFormatter.formattedValue = this.el.value;

    // Send up the plain value to the host form. Formatted value is presented only in the input field.
    this.ngControl.control.setValue(this.currencyFormatter.plainValue);
    this.el.value = this.currencyFormatter.formattedValue;
  }

  @HostListener('keydown', ['$event'])
  onKeypress($event: KeyboardEvent) {
    return this.currencyKeydownController.isKeypressAllowed($event);
  }

  @HostListener('paste', ['$event'])
  onPaste($event) {
    $event.preventDefault();

    // Browser compatibility
    // tslint:disable-next-line:no-string-literal
    const clipboardData: DataTransfer | null = window['clipboardData'] ? window['clipboardData'] : $event.clipboardData;
    this.currencyFormatter.formattedValue = clipboardData.getData('text');

    this.el.value = this.currencyFormatter.plainValue;
  }
}
