import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Spectator } from '@ngneat/spectator';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { ProductService } from '../services/product.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let spectator: Spectator<ProductListComponent>;
  const createComponent = createComponentFactory({
    component: ProductListComponent,
    shallow: true,
    imports: [HttpClientTestingModule],
    providers: [mockProvider(ProductService)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
