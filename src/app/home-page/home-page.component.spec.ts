import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let spectator: Spectator<HomePageComponent>;
  const createComponent = createComponentFactory({
    component: HomePageComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
