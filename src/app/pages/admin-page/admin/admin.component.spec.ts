import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { AdminComponent } from './admin.component';

describe('AdminComponent', () => {
  let spectator: Spectator<AdminComponent>;
  const createComponent = createComponentFactory({
    component: AdminComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
