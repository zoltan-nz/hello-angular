import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { ProductCardComponent } from './product-card.component';
import { products } from '../mocked-data/products';

describe('ProductCardComponent', () => {
  let spectator: Spectator<ProductCardComponent>;
  const createComponent = createComponentFactory({
    component: ProductCardComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    spectator.setInput('product', products[0]);
    expect(spectator.component).toBeDefined();
  });
});
