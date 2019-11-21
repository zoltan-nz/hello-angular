import { ProductService } from './product.service';
import { createHttpFactory, SpectatorHttp } from '@ngneat/spectator/jest';

describe('ProductService', () => {
  let spectator: SpectatorHttp<ProductService>;
  const createService = createHttpFactory(ProductService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeDefined();
  });
});
