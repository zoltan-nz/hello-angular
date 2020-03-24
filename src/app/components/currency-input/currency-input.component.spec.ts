import { ReactiveFormsModule } from '@angular/forms';
import { createComponentFactory, Spectator } from '@ngneat/spectator';

import { CurrencyInputComponent } from './currency-input.component';

describe('CurrencyInputComponent', () => {
  let spectator: Spectator<CurrencyInputComponent>;
  const createComponent = createComponentFactory({
    component: CurrencyInputComponent,
    shallow: true,
    providers: [ReactiveFormsModule],
  });

  it('should create', () => {
    spectator = createComponent();

    expect(spectator.component).toBeTruthy();
  });
});
