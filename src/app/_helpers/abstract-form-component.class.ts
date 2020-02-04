import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';

export default class AbstractFormComponentClass implements ControlValueAccessor, Validator {
  onChange;
  onTouched;
  onValidatorChange;
  isDisabled;
  value;

  constructor() {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onValidatorChange = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    return undefined;
  }

  writeValue(value: any): void {
    this.value = value;
  }
}
