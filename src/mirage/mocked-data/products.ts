import { IProduct, IProductsResponse } from '../../app/_models/product.interface';

export const products: IProduct[] = [
  {
    id: 1,
    name: 'Phone XL 2018',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 2,
    name: 'Phone Mini 2018',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 3,
    name: 'Phone Standard 2018',
    price: 299,
    description: 'Everything for a great price',
  },
  {
    id: 4,
    name: 'Phone Standard 2019',
    price: 299,
    description: 'Everything for a great price',
  },
  {
    id: 5,
    name: 'Phone Mini 2019',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 6,
    name: 'Phone XL 2019',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
];

export const productsResponseListCategory2: IProduct[] = [
  {
    id: 7,
    name: 'Category 2 - Phone XL 2018',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
  {
    id: 8,
    name: 'Category 2 - Phone Mini 2018',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 9,
    name: 'Phone Standard 2018',
    price: 299,
    description: 'Everything for a great price',
  },
  {
    id: 10,
    name: 'Phone Standard 2019',
    price: 299,
    description: 'Everything for a great price',
  },
  {
    id: 11,
    name: 'Phone Mini 2019',
    price: 699,
    description: 'A great phone with one of the best cameras',
  },
  {
    id: 12,
    name: 'Phone XL 2019',
    price: 799,
    description: 'A large phone with one of the best screens',
  },
];
export const productsResponse: IProductsResponse = {
  products,
};
