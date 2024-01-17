import React, { createContext, useState } from "react";
import { FullProduct } from "../types/product";
import { saveToLocalStorage } from "../utils/localStorageHandler";

interface CartContextType {
  products: FullProduct[];
  setProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  addProduct: (product: FullProduct) => void;
  removeProduct: (id: number) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProps {
  children: JSX.Element[];
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<FullProduct[]>([]);

  const addProduct = (product: FullProduct) => {
    let newProducts = products;

    if (products.find((p) => p.id === product.id)) {
      newProducts = products.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
    } else {
      newProducts = [...products, { ...product, quantity: 1 }];
    }

    setProducts(newProducts);
    saveToLocalStorage("cartProducts", newProducts);
  };

  const removeProduct = (id: number) => {
    let newProducts = products;

    if (products.find((p) => p.id === id)?.quantity !== 1) {
      newProducts = products.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
    } else {
      newProducts = products.filter((product) => product.id !== id);
    }

    setProducts(newProducts);
    saveToLocalStorage("cartProducts", newProducts);
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
