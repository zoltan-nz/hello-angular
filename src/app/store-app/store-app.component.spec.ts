import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { StoreAppComponent } from './store-app.component';

describe('StoreAppComponent', () => {
  let spectator: Spectator<StoreAppComponent>;
  const createComponent = createComponentFactory({
    component: StoreAppComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
