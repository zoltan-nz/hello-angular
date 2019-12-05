import { byLabel, createComponentFactory, Spectator } from '@ngneat/spectator';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('LoginComponent', () => {
  let spectator: Spectator<LoginComponent>;
  let component: LoginComponent;
  const createComponent = createComponentFactory({
    component: LoginComponent,
    imports: [ReactiveFormsModule],
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
