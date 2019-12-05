import { Spectator, createComponentFactory, byText, byTestId, byLabel } from '@ngneat/spectator';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  let component: LoginComponent;
  const createComponent = createComponentFactory(LoginComponent);

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
