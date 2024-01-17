import { ProductType, FullProduct } from "./../types/product";
import { orderType } from "../types/Filter";

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
    inclusionDate: randomDate(new Date(2020, 0, 1), new Date()),
    quantity: 1,
  })) as FullProduct[];
};

export const getMinValue = (products: FullProduct[]): number => {
  return Math.min(...products.map((product) => product.price));
};

export const getMaxValue = (products: FullProduct[]): number => {
  return Math.max(...products.map((product) => product.price));
};

export const orderByDate = (
  products: FullProduct[],
  order: orderType
): FullProduct[] => {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.inclusionDate.getTime() - b.inclusionDate.getTime();
    } else {
      return b.inclusionDate.getTime() - a.inclusionDate.getTime();
    }
  });
};

export const orderByPrice = (
  products: FullProduct[],
  order: orderType
): FullProduct[] => {
  return products.sort((a, b) => {
    if (order === "asc") {
      return a.price - b.price;
    } else {
      return b.price - a.price;
    }
  });
};
