import { Spectator } from '@ngneat/spectator';
import { createComponentFactory, mockProvider } from '@ngneat/spectator/jest';
import { AuthenticationService } from '../_services/authentication.service';
import { MainNavigationBarComponent } from './main-navigation-bar.component';

describe('MainNavigationBarComponent', () => {
  let spectator: Spectator<MainNavigationBarComponent>;
  const createComponent = createComponentFactory({
    component: MainNavigationBarComponent,
    shallow: true,
    providers: [mockProvider(AuthenticationService)],
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
