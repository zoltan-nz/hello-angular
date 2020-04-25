import Product from './product.model';

export interface ICategory {
  id: number;
  name: string;
  products: Product[];
}

export interface ICategoryResponse {
  categories: ICategory[];
}
