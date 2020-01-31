import { ProductService } from './product.service';
import { createServiceFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { ProductAdapter } from './product.adapter';
import { of } from 'rxjs';
import { ProductCardComponent } from '../product-card/product-card.component';

const URL = 'url';
const products = describe('ProductService', () => {
  let spectator: SpectatorService<ProductService>;
  let service: ProductService;

  const createService = createServiceFactory({
    service: ProductService,
    providers: [
      mockProvider(ProductAdapter, {
        load$: () => of(),
      }),
    ],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
