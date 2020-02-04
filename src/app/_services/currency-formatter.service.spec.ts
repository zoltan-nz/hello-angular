import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CurrencyFormatterService } from './currency-formatter.service';

describe('CurrencyFormatterService', () => {
  let spectator: SpectatorService<CurrencyFormatterService>;
  const createService = createServiceFactory(CurrencyFormatterService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
