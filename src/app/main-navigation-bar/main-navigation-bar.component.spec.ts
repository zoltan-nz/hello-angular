import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { MainNavigationBarComponent } from './main-navigation-bar.component';

describe('MainNavigationBarComponent', () => {
  let spectator: Spectator<MainNavigationBarComponent>;
  const createComponent = createComponentFactory({
    component: MainNavigationBarComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
