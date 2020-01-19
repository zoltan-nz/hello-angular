import mirageServer from './mirage.server';

class MockService {
  public mirageServer = mirageServer;

  constructor() {}

  setup(isProduction: boolean) {
    if (!isProduction) mirageServer.start();
  }
}

const mockService = new MockService();

export default mockService;
