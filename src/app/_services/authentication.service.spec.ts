import { Router } from '@angular/router';
import { createHttpFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let spectator: SpectatorService<AuthenticationService>;
  const createService = createHttpFactory({
    service: AuthenticationService,
    providers: [mockProvider(Router)],
  });

  beforeEach(() => (spectator = createService()));

  it('should be created', () => {
    expect(spectator.service).toBeTruthy();
  });
});
