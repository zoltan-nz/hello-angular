import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { CartPageComponent } from './cart-page.component';
import { FormBuilder } from '@angular/forms';

describe('CartComponent', () => {
  let spectator: Spectator<CartPageComponent>;
  const createComponent = createComponentFactory({
    component: CartPageComponent,
    providers: [FormBuilder],
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
