import { Spectator } from '@ngneat/spectator';
import { ProductListComponent } from './product-list.component';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { ProductService } from '../services/product.service';
import { of } from 'rxjs';
import { productsResponse } from '../../../../mirage/mocked-data/products';
import Product from '../models/product.model';

describe('ProductListComponent', () => {
  let spectator: Spectator<ProductListComponent>;
  const createComponent = createComponentFactory({
    component: ProductListComponent,
    shallow: true,
    providers: [
      mockProvider(ProductService, {
        products$: of([new Product(productsResponse.products[0])]),
      }),
    ],
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
