import { IProduct } from './product.interface';

export default class Product implements IProduct {
  id: number;
  name: string;
  price: number;
  description: string;

  constructor({ ...props }: IProduct) {
    Object.assign(this, props);
  }
}
