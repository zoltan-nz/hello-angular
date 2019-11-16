import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { SpectatorService } from '@ngneat/spectator';
import { createServiceFactory } from '@ngneat/spectator/jest';

describe('ProductService', () => {
  let spectator: SpectatorService<ProductService>;
  const createService = createServiceFactory(ProductService);

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeDefined();
  });
});
