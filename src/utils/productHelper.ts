import { ProductType, FullProduct } from "./../types/product";

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const convertToFullProduct = (
  products: ProductType[]
): FullProduct[] => {
  return products.map((product) => ({
    ...product,
    date: randomDate(new Date(2020, 0, 1), new Date()),
    quantity: 1,
  })) as FullProduct[];
};
