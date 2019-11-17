import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { PageNotFoundComponent } from './page-not-found.component';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<PageNotFoundComponent>;
  const createComponent = createComponentFactory({
    component: PageNotFoundComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
