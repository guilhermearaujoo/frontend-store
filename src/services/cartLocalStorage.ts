import { ProductWIthDateType } from "../types/product";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "../utils/localStorageHandler";

export const addProductToLocalStorage = (product: ProductWIthDateType) => {
  const products = getFromLocalStorage("cartProducts") || [];
  products.push(product);
  saveToLocalStorage("cartProducts", products);
};

export const removeProductFromLocalStorage = (id: number) => {
  const products = getFromLocalStorage("cartProducts") || [];
  const newProducts = products.filter(
    (product: ProductWIthDateType) => product.id !== id
  );
  saveToLocalStorage("cartProducts", newProducts);
};

export const getProductsFromLocalStorage = () => {
  const products = getFromLocalStorage("cartProducts") || [];
  return products;
};
