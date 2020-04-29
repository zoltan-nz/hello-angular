import { NgControl } from '@angular/forms';
import { createDirectiveFactory, mockProvider, SpectatorDirective } from '@ngneat/spectator/jest';
import { CurrencyFormatterService } from '../services/currency-formatter.service';
import { CurrencyKeydownControllerService } from '../services/currency-keydown-controller.service';

import { CurrencyFormatDirective } from './currency-format.directive';

describe('CurrencyFormatDirective ', () => {
  let spectator: SpectatorDirective<CurrencyFormatDirective>;
  const createDirective = createDirectiveFactory({
    directive: CurrencyFormatDirective,
    providers: [NgControl, mockProvider(CurrencyFormatterService), mockProvider(CurrencyKeydownControllerService)],
  });

  it('should work', () => {
    spectator = createDirective(`<input type="text" currencyFormat>`);

    spectator.dispatchKeyboardEvent(spectator.element, 'keydown', '1', spectator.element);
    // tslint:disable-next-line:no-string-literal
    expect(spectator.directive['currencyKeydownController'].isKeypressAllowed).toHaveBeenCalled();
  });
});
