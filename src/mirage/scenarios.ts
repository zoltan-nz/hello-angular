import { Server } from 'miragejs';
import { categoriesResponse } from './mocked-data/categories';
import { productsResponse } from './mocked-data/products';

export type Scenario = (server: Server) => void;

export const slowResponse: Scenario = (server: Server) => (server.timing = 2000);

export const getProductsOk: Scenario = (server: Server) => server.get('/products', () => productsResponse);

export const getProductsEmpty: Scenario = (server: Server) =>
  server.get('/products', () => {
    return { products: [] };
  });

export const postAuthenticateOk: Scenario = (server: Server) =>
  server.post('/users/authenticate', () => {
    return { id: 1, username: 'user', firstName: 'Joe', lastName: 'User', token: 'fake-jwt-token' };
  });

export const getCategoriesOk: Scenario = (server: Server) => server.get('/categories', () => categoriesResponse);
