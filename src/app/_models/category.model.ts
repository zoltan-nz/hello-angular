import { ICategory } from './category.interface';
import Product from './product.model';

export default class Category implements ICategory {
  id: number;
  name: string;
  products: Product[];

  constructor(props: ICategory) {
    Object.assign(this, props);
  }
}
