import { FullProduct } from "./../types/product";

export const getSum = (products: FullProduct[]): number => {
  return products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
};

export const getQuantity = (products: FullProduct[]): number => {
  return products.reduce((acc, curr) => acc + curr.quantity, 0);
};
