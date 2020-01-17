import { Router } from '@angular/router';
import { createHttpFactory, mockProvider, SpectatorService } from '@ngneat/spectator/jest';
import { JwtInterceptor } from './jwt.interceptor';

describe('JwtInterceptor', () => {
  let spectator: SpectatorService<JwtInterceptor>;
  let service: JwtInterceptor;

  const createService = createHttpFactory({
    service: JwtInterceptor,
    providers: [mockProvider(Router)],
  });

  beforeEach(() => {
    spectator = createService();
    service = spectator.service;
  });

  it('should be created', () => {
    expect(service).toBeDefined();
  });
});
