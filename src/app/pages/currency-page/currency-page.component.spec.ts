import { Spectator, createComponentFactory } from '@ngneat/spectator';

import { CurrencyPageComponent } from './currency-page.component';

describe('CurrencyPageComponent', () => {
  let spectator: Spectator<CurrencyPageComponent>;
  const createComponent = createComponentFactory(CurrencyPageComponent);

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
