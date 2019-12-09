import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { AuthenticationService } from './authentication.service';

describe('Login/services/authenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createServiceFactory(AuthenticationService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
