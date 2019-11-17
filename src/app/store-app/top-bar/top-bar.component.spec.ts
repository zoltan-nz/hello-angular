import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { TopBarComponent } from './top-bar.component';

describe('TopBarComponent', () => {
  let spectator: Spectator<TopBarComponent>;
  const createComponent = createComponentFactory({
    component: TopBarComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
