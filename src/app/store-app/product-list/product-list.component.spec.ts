import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../services/product.service';

describe('ProductListComponent', () => {
  let spectator: Spectator<ProductListComponent>;
  let component: ProductListComponent;
  let productService: ProductService;
  const createComponent = createComponentFactory({
    component: ProductListComponent,
    mocks: [ProductService],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
    productService = spectator.get<ProductService>(ProductService);
  });

  it('exists', () => {
    expect(component).toBeDefined();
  });
});
