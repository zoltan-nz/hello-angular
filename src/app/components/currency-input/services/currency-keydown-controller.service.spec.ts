import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CurrencyKeydownControllerService } from './currency-keydown-controller.service';

// key | value | selectionStart | selectionEnd | allowed
type KeyDownEventTestCase = [string, string, number, number, boolean?];

const createKeyDownEvent = (testCase: KeyDownEventTestCase) => {
  const [key, valueOfInputField, selectionStart, selectionEnd] = testCase;
  const keyDownEvent = new KeyboardEvent('keydown', { key });

  const target: HTMLInputElement = document.createElement('input');
  target.value = valueOfInputField;
  target.selectionStart = selectionStart;
  target.selectionEnd = selectionEnd;

  jest.spyOn(keyDownEvent, 'target', 'get').mockReturnValue(target);
  return keyDownEvent;
};

// key | value | selectionStart | selectionEnd | allowed
const testCases: KeyDownEventTestCase[] = [
  ['.', '', 0, 0, true],
  ['Tab', '', 0, 0, true],
  ['a', '', 0, 0, false],
  ['1', '', 0, 0, true],
  [',', '', 0, 0, false],

  // Only one decimal point
  ['.', '.', 1, 1, false],
  ['.', '1234.2', 6, 6, false],

  // Decimal point can inserted or overwritten with selection
  ['.', '1234567', 1, 1, false],
  ['.', '1234567', 4, 4, false],
  ['.', '1234567', 0, 4, false],
  ['.', '1234567', 5, 5, true],
  ['.', '1234567', 6, 6, true],
  ['.', '1234567', 3, 5, true],
  ['.', '1234567', 0, 7, true],
  ['.', '1234567', 0, 7, true],

  // No more than two decimals
  ['2', '12.34', 5, 5, false],
  ['2', '12.34', 2, 2, true],
  ['3', '12.34', 3, 5, true],

  // Max length
  ['2', '1234567890123', 3, 3, false],
  ['2', '123456789012', 3, 3, true],
  ['.', '1234567890123', 11, 11, true],
  ['.', '1234567890123', 13, 13, true],
  ['4', '1234567890123.', 14, 14, true],
  ['4', '1234567890123.4', 15, 15, true],
  ['4', '1234567890123.44', 16, 16, false],
];

describe('CurrencyKeydownControllerService', () => {
  let spectator: SpectatorService<CurrencyKeydownControllerService>;
  let service: CurrencyKeydownControllerService;
  const createService = createServiceFactory(CurrencyKeydownControllerService);

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test.each(testCases)(
    'key: %s, inputValue: %s, selectStart: %d, selectEnd: %d, expected: %s',
    (key, value, selectionStart, selectionEnd, allowed) => {
      expect(service.isKeypressAllowed(createKeyDownEvent([key, value, selectionStart, selectionEnd]))).toEqual(
        allowed
      );
    }
  );

  test('copy paste should work', () => {
    const keydown = createKeyDownEvent(['v', '', 0, 0]);
    jest.spyOn(keydown, 'ctrlKey', 'get').mockReturnValue(true);
    jest.spyOn(keydown, 'metaKey', 'get').mockReturnValue(true);
    expect(service.isKeypressAllowed(keydown)).toBeTruthy();
  });
});
