import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { CurrencyPageComponent } from './currency-page.component';

describe('CurrencyPageComponent', () => {
  let spectator: Spectator<CurrencyPageComponent>;
  const createComponent = createComponentFactory({
    component: CurrencyPageComponent,
    shallow: true,
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
