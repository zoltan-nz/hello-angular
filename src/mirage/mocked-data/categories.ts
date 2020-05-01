import { ICategory, ICategoryResponse } from '../../app/_models/category.interface';
import { products, productsResponseListCategory2 } from './products';

export const categories: ICategory[] = [
  { id: 1, name: 'Category 1', products },
  { id: 2, name: 'Category 2', products: productsResponseListCategory2 },
  { id: 3, name: 'Category 3', products },
];

export const categoriesResponse: ICategoryResponse = {
  categories,
};
