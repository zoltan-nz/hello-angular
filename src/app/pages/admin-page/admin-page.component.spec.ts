import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { AdminPageComponent } from './admin-page.component';

describe('AdminComponent', () => {
  let spectator: Spectator<AdminPageComponent>;
  const createComponent = createComponentFactory({
    component: AdminPageComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
