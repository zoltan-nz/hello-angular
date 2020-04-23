import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { ProductCardComponent } from './product-card.component';
import { productsResponse } from '../../../../mirage/mocked-data/products';

describe('ProductCardComponent', () => {
  let spectator: Spectator<ProductCardComponent>;
  const createComponent = createComponentFactory({
    component: ProductCardComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    spectator.setInput('product', productsResponse[0]);
    expect(spectator.component).toBeDefined();
  });
});
