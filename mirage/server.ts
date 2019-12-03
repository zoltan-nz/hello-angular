import { Server } from 'miragejs';
import { productsResponse } from '../src/app/store-app/mocked-data/products';

class MirageServer {
  public server: Server;

  constructor() {}

  start() {
    this.server = this.server ? this.server : new Server();
    this.applySettings();
    this.applyRoutes();

    console.log('Mirage Server is started.');
  }

  applySettings() {
    this.server.namespace = '/api';
  }

  applyRoutes() {
    this.server.timing = 2000;
    this.server.get('/products', () => productsResponse);
  }

  stop() {
    if (this.server) {
      this.server.shutdown();
      this.server = undefined;
      console.log('Mirage Server is stopped.');
    } else {
      console.log('Mirage Server has been already stopped.');
    }
  }
}

const mirageServer = new MirageServer();

export default mirageServer;
