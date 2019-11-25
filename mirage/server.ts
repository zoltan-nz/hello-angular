import { Server } from 'miragejs';
import { productsResponse } from '../src/app/store-app/mocked-data/products';

export default class MirageServer {
  public server: Server;

  constructor() {}

  start() {
    this.server = new Server({});
    this.applySettings();
    this.applyRoutes();

    console.log('Mirage Server is started');
  }

  applySettings() {
    this.server.namespace = '/api';
  }

  applyRoutes() {
    this.server.timing = 2000;
    this.server.get('/products', () => productsResponse);
  }

  stop() {
    this.server.shutdown();
    console.log('Mirage Server is stopped');
  }
}
