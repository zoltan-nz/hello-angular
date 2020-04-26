import {
  getCategoriesOk,
  getProductsByCategoryOk,
  getProductsEmpty,
  getProductsOk,
  postAuthenticateOk,
  slowResponse,
} from './scenarios';

export const scenarioMap = {
  SLOW_RESPONSE: slowResponse,
  GET_PRODUCTS_OK: getProductsOk,
  GET_PRODUCTS_EMPTY: getProductsEmpty,
  POST_AUTH_OK: postAuthenticateOk,
  GET_CATEGORIES_OK: getCategoriesOk,
  GET_PRODUCTS_BY_CATEGORY_OK: getProductsByCategoryOk,
};

export const HAPPY_PATH = [
  scenarioMap.GET_PRODUCTS_OK,
  scenarioMap.POST_AUTH_OK,
  scenarioMap.GET_CATEGORIES_OK,
  scenarioMap.GET_PRODUCTS_BY_CATEGORY_OK,
];
