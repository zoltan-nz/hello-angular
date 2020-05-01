import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { NotFoundPageComponent } from './not-found-page.component';

describe('PageNotFoundComponent', () => {
  let spectator: Spectator<NotFoundPageComponent>;
  const createComponent = createComponentFactory({
    component: NotFoundPageComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
