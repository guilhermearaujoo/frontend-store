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
  children: JSX.Element;
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<FullProduct[]>([]);

  const addProduct = (product: FullProduct) => {
    if (products.find((p) => p.id === product.id)) {
      const newProducts = products.map((p) => {
        if (p.id === product.id) {
          return { ...p, quantity: p.quantity + 1 };
        }
        return p;
      });
      setProducts(newProducts);
      saveToLocalStorage("cartProducts", newProducts);
      return;
    }

    setProducts([...products, { ...product, quantity: 1 }]);
    saveToLocalStorage("cartProducts", products);
  };

  const removeProduct = (id: number) => {
    if (products.find((p) => p.id === id)?.quantity !== 1) {
      const newProducts = products.map((p) => {
        if (p.id === id) {
          return { ...p, quantity: p.quantity - 1 };
        }
        return p;
      });
      setProducts(newProducts);
      saveToLocalStorage("cartProducts", newProducts);
      return;
    }

    const newProducts = products.filter((product) => product.id !== id);
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
