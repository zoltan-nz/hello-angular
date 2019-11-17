import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let spectator: Spectator<ProductListComponent>;
  const createComponent = createComponentFactory({
    component: ProductListComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
