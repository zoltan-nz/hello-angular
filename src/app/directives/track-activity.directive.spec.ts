import { fakeAsync } from '@angular/core/testing';
import { createDirectiveFactory, SpectatorDirective } from '@ngneat/spectator/jest';
import { DEBOUNCE_TIME_MS, TrackActivityDirective } from './track-activity.directive';

console.log = () => {};

describe('TrackActivityDirective', () => {
  let originalConsoleLog;

  let directive: TrackActivityDirective;
  let spectator: SpectatorDirective<TrackActivityDirective>;
  const createDirective = createDirectiveFactory({
    directive: TrackActivityDirective,
    providers: [
      {
        provide: DEBOUNCE_TIME_MS,
        useValue: 2,
      },
    ],
  });

  beforeAll(() => {
    // Keep the test result output clean with hiding console.log messages.
    originalConsoleLog = console.log;
    console.log = () => {};
  });

  afterAll(() => {
    console.log = originalConsoleLog;
  });

  beforeEach(() => {
    spectator = createDirective('<body trackActivity></body>');
    directive = spectator.directive;
    jest.spyOn<TrackActivityDirective, any>(directive, 'rxjsScrollCallBack');
    jest.spyOn<TrackActivityDirective, any>(directive, 'hostListenerScrollCallBack');
  });

  test('it is created', () => {
    expect(directive).toBeDefined();
  });

  test('rxjs fromEvent observer call the call back function once in debounce time', fakeAsync(() => {
    spectator.dispatchFakeEvent(document, 'scroll');
    spectator.dispatchFakeEvent(document, 'scroll');
    spectator.dispatchFakeEvent(document, 'scroll');
    spectator.tick(2);

    expect(directive.rxjsScrollCallBack).toHaveBeenCalledTimes(1);
    expect(directive.hostListenerScrollCallBack).toHaveBeenCalledTimes(3);
  }));

  test('hostListener decorated call back is called', () => {
    spectator.dispatchFakeEvent(document, 'scroll');

    expect(directive.hostListenerScrollCallBack).toHaveBeenCalled();
  });
});
