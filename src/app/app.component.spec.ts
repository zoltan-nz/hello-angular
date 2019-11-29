import { AppComponent } from './app.component';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

describe('AppComponent', () => {
  let spectator: SpectatorRouting<AppComponent>;
  let component: AppComponent;
  const createComponent = createRoutingFactory({
    component: AppComponent,
    shallow: true,
    queryParams: [],
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('exists', () => {
    expect(component).toBeDefined();
  });
});
