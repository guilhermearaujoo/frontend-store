import React, { createContext, useState } from "react";
import { FullProduct } from "../types/product";
import { getMinValue, getMaxValue } from "../utils/productHelper";

interface ProductContextType {
  products: FullProduct[];
  setProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  filteredProducts: FullProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  clearProducts: () => void;
  minPrice: number;
  maxPrice: number;
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

  const contextValue = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    clearProducts,
    minPrice,
    maxPrice,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
