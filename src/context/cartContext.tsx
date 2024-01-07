import React, { createContext, useState } from "react";
import { ProductWIthDateType } from "../types/product";
import {
  addProductToLocalStorage,
  removeProductFromLocalStorage,
} from "../services/cartLocalStorage";

interface CartContextType {
  products: ProductWIthDateType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductWIthDateType[]>>;
  addProduct: (product: ProductWIthDateType) => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProps {
  children: JSX.Element;
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<ProductWIthDateType[]>([]);

  const addProduct = (product: ProductWIthDateType) => {
    setProducts([...products, product]);
    addProductToLocalStorage(product);
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
    removeProductFromLocalStorage(id);
  };

  const contextValue = {
    products,
    setProducts,
    addProduct,
    removeProduct,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default Context;
