import { ProductType, ProductWIthDateType } from "./../types/product";

function randomDate(start: Date, end: Date): Date {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

export const addDateToProducts = (
  products: ProductType[]
): ProductWIthDateType[] => {
  return products.map((product) => ({
    ...product,
    date: randomDate(new Date(2020, 0, 1), new Date()),
  })) as ProductWIthDateType[];
};
