import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrencyFormatterService } from '../_services/currency-formatter.service';
import { CurrencyKeydownControllerService } from '../_services/currency-keydown-controller.service';

@Directive({
  selector: '[currencyFormat]',
})
export class CurrencyFormatDirective {
  constructor(
    private el: ElementRef<HTMLInputElement>,
    private currencyFormatter: CurrencyFormatterService,
    private currencyKeydownController: CurrencyKeydownControllerService,
  ) {}

  @HostListener('change', ['$event'])
  onChange($event: Event) {}

  @HostListener('focus', ['$event'])
  onFocus($event: FocusEvent) {
    const target = $event.target as HTMLInputElement;
    this.currencyFormatter.formattedValue = target.value;

    target.value = this.currencyFormatter.plainValue;
  }

  @HostListener('blur', ['$event'])
  onBlur($event: FocusEvent) {
    const target = $event.target as HTMLInputElement;
    this.currencyFormatter.plainValue = target.value;

    target.value = this.currencyFormatter.formattedValue;
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

    const target = $event.target as HTMLInputElement;
    target.value = this.currencyFormatter.plainValue;
  }
}
