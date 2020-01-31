export interface IProduct {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface IProductsResponse {
  products: IProduct[];
}
