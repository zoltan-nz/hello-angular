import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';
import { CurrencyFormatterService } from './currency-formatter.service';

describe('CurrencyFormatterService', () => {
  let spectator: SpectatorService<CurrencyFormatterService>;
  let service: CurrencyFormatterService;
  const createService = createServiceFactory(CurrencyFormatterService);

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should work', () => {
    expect(spectator.service).toBeTruthy();
  });

  test.each([
    [null, '', ''],
    [undefined, '', ''],
    ['', '', ''],
    ['0', '0', '0.00'],
    ['0.0', '0.0', '0.00'],
    ['0.00', '0.00', '0.00'],
    ['1', '1', '1.00'],
    ['1234567', '1234567', '1,234,567.00'],
    ['1234567.8', '1234567.8', '1,234,567.80'],
    ['1234567.89', '1234567.89', '1,234,567.89'],
    ['1234567.896', '1234567.896', '1,234,567.90'],
    ['1234567.894', '1234567.894', '1,234,567.89'],
  ])(
    'set #plainValue %s, expected plainValue: %s, expected formattedValue %s',
    (newPlainValue, expectedPlainValue, expectedFormattedValue) => {
      service.plainValue = newPlainValue;
      expect(service.plainValue).toEqual(expectedPlainValue);
      expect(service.formattedValue).toEqual(expectedFormattedValue);
    }
  );

  test.each([
    [null, '', ''],
    [undefined, '', ''],
    ['', '', ''],
    ['0', '0.00', '0.00'],
    ['0.0', '0.00', '0.00'],
    ['0.00', '0.00', '0.00'],
    ['1', '1.00', '1.00'],
    ['1234567', '1234567.00', '1,234,567.00'],
    ['1234567.8', '1234567.80', '1,234,567.80'],
    ['1234567.89', '1234567.89', '1,234,567.89'],
    ['1234567.896', '1234567.89', '1,234,567.89'],
    ['1234567.894', '1234567.89', '1,234,567.89'],
    ['$1,234,567.894', '1234567.89', '1,234,567.89'],
    ['NZD   $    1,234,567.894', '1234567.89', '1,234,567.89'],
    ['Some text -$    1, 2, 3 , 4 , 5 , 6 , 7.894', '1234567.89', '1,234,567.89'],
    ['-$1,234,567.894', '1234567.89', '1,234,567.89'],
    ['-$1.234.567.894', '1.23', '1.23'],
    ['no any number at all', '', ''],
    ['<img src="cute-cat.jpg">', '', ''],
  ])(
    'set #formattedValue %s, expected plainValue: %s, expected formattedValue %s',
    (newFormattedValue, expectedPlainValue, expectedFormattedValue) => {
      service.formattedValue = newFormattedValue;
      expect(service.plainValue).toEqual(expectedPlainValue);
      expect(service.formattedValue).toEqual(expectedFormattedValue);
    }
  );
});
