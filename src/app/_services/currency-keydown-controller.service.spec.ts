import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CurrencyKeydownControllerService } from './currency-keydown-controller.service';

describe('CurrencyKeydownControllerService', () => {
  let spectator: SpectatorService<CurrencyKeydownControllerService>;
  const createService = createServiceFactory(CurrencyKeydownControllerService);

  beforeEach(() => (spectator = createService()));

  it('should...', () => {
    expect(spectator.service).toBeTruthy();
  });
});
