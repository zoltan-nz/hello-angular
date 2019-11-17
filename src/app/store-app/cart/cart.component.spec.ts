import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { CartComponent } from './cart.component';
import { FormBuilder } from '@angular/forms';

describe('CartComponent', () => {
  let spectator: Spectator<CartComponent>;
  const createComponent = createComponentFactory({
    component: CartComponent,
    providers: [FormBuilder],
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
