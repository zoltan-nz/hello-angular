import { Spectator } from '@ngneat/spectator';
import { createComponentFactory } from '@ngneat/spectator/jest';
import { AdminDashboardComponent } from './admin-dashboard.component';

describe('AdminComponent', () => {
  let spectator: Spectator<AdminDashboardComponent>;
  const createComponent = createComponentFactory({
    component: AdminDashboardComponent,
    shallow: true,
  });

  beforeEach(() => (spectator = createComponent()));

  it('exists', () => {
    expect(spectator.component).toBeDefined();
  });
});
