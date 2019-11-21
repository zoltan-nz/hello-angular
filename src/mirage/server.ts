import { Server } from 'miragejs';
import { products } from '../app/store-app/mocked-data/products';

const mirageServer = new Server({
  routes() {
    this.namespace = '/api';

    this.get('/products', () => products);
  },
});

export const initializeMirageServer = () => {
  console.log('Mirage Server Initialization is called.');
  return mirageServer;
};
