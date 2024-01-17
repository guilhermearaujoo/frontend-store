import React, { createContext, useState } from "react";
import { FullProduct } from "../types/product";
import {
  getMinValue,
  getMaxValue,
  orderByDate,
  orderByPrice,
} from "../utils/productHelper";
import { orderType } from "../types/Filter";

interface ProductContextType {
  products: FullProduct[];
  setProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  filteredProducts: FullProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  clearProducts: () => void;
  minPrice: number;
  maxPrice: number;
  orderProductsByDate: (order: orderType) => void;
  orderProductsByValue: (order: orderType) => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface CartProps {
  children: JSX.Element;
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<FullProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<FullProduct[]>([]);

  const clearProducts = () => {
    setFilteredProducts(products);
  };

  const minPrice = getMinValue(products);
  const maxPrice = getMaxValue(products);

  const orderProductsByDate = (order: orderType) => {
    const filteredOrderedProducts = orderByDate(filteredProducts, order);
    const orderedProducts = orderByDate(products, order);

    setFilteredProducts([...filteredOrderedProducts]);
    setProducts([...orderedProducts]);
  };

  const orderProductsByValue = (order: orderType) => {
    const filteredOrderedProducts = orderByPrice(filteredProducts, order);
    const orderedProducts = orderByPrice(products, order);

    setFilteredProducts([...filteredOrderedProducts]);
    setProducts([...orderedProducts]);
  };

  const contextValue = {
    clearProducts,
    filteredProducts,
    maxPrice,
    minPrice,
    orderProductsByDate,
    orderProductsByValue,
    products,
    setFilteredProducts,
    setProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
