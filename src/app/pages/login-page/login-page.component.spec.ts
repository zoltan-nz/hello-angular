import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { byLabel } from '@ngneat/spectator';
import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { LoginPageComponent } from './login-page.component';

describe('LoginComponent', () => {
  let spectator: SpectatorRouting<LoginPageComponent>;
  let component: LoginPageComponent;
  const createComponent = createRoutingFactory({
    component: LoginPageComponent,
    imports: [ReactiveFormsModule, HttpClientTestingModule],
    shallow: true,
  });

  beforeEach(() => {
    spectator = createComponent();
    component = spectator.component;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  test('Login Form', () => {
    expect(spectator.query('[data-test-header]')).toContainText('Login');
    expect(spectator.query(byLabel('Username'))).toBeDefined();
    expect(spectator.query(byLabel('Password'))).toBeDefined();
  });
});
