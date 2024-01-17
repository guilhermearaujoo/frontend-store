import { FullProduct } from "../types/product";
import dayjs, { Dayjs } from "dayjs";

export const filterByDate = (
  currentProducts: FullProduct[],
  startTime: Dayjs,
  endTime: Dayjs
) => {
  const filteredProducts = currentProducts.filter((product) => {
    const productDate = dayjs(product.inclusionDate);
    return productDate.isAfter(startTime) && productDate.isBefore(endTime);
  });
  return filteredProducts;
};

export const filterByValue = (
  currentProducts: FullProduct[],
  values: number[]
) => {
  const filteredProducts = currentProducts.filter((product) => {
    const productValue = product.price;
    return productValue >= values[0] && productValue <= values[1];
  });
  return filteredProducts;
};

export const filterByName = (currentProducts: FullProduct[], name: string) => {
  if (name) {
    const filteredProducts = currentProducts.filter((product) => {
      const productName = product.title.toLowerCase();
      return productName?.includes(name as string);
    });
    return filteredProducts;
  }

  return currentProducts;
};
