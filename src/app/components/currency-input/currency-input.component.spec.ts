import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CurrencyInputComponent } from './currency-input.component';

describe('CurrencyInputComponent', () => {
  let spectator: Spectator<CurrencyInputComponent>;
  const createComponent = createComponentFactory(CurrencyInputComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
