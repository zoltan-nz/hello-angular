import { SpectatorService } from '@ngneat/spectator';
import { createHttpFactory } from '@ngneat/spectator/jest';
import { UserService } from './user.service';

describe('UserService', () => {
  let spectator: SpectatorService<UserService>;
  const createService = createHttpFactory(UserService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
