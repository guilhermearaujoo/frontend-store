import React, { createContext, useState } from "react";
import { FullProduct } from "../types/product";

interface ProductContextType {
  products: FullProduct[];
  setProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  filteredProducts: FullProduct[];
  setFilteredProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  clearProducts: () => void;
}

export const ProductContext = createContext<ProductContextType | null>(null);

interface CartProps {
  children: JSX.Element[];
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<FullProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<FullProduct[]>([]);

  const clearProducts = () => {
    setFilteredProducts(products);
  };

  const contextValue = {
    products,
    setProducts,
    filteredProducts,
    setFilteredProducts,
    clearProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default Context;
