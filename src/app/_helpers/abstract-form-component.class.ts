import { AbstractControl, ControlValueAccessor, FormControl, ValidationErrors, Validator } from '@angular/forms';

export default class AbstractFormComponentClass implements ControlValueAccessor, Validator {
  form: FormControl = new FormControl('');
  onValidatorChange;
  isDisabled;
  value;

  constructor() {}

  registerOnChange(fn: any): void {
    this.form.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.form.valueChanges.subscribe(fn);
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
    this.form.setValue(value);
  }
}
