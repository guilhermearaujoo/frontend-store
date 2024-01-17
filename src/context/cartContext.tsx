import React, { createContext, useState } from "react";
import { FullProduct } from "../types/product";
import { saveToLocalStorage } from "../utils/localStorageHandler";

type Alert = {
  alert: string;
  open: boolean;
};

interface CartContextType {
  products: FullProduct[];
  setProducts: React.Dispatch<React.SetStateAction<FullProduct[]>>;
  addProduct: (product: FullProduct) => void;
  removeProduct: (id: number) => void;
  alert?: Alert;
  setAlert?: React.Dispatch<React.SetStateAction<Alert>>;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | null>(null);

interface CartProps {
  children: JSX.Element[] | JSX.Element;
}

function Context(props: CartProps) {
  const [products, setProducts] = useState<FullProduct[]>([]);
  const [alert, setAlert] = useState<Alert>({ alert: "", open: false });

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
    setAlert({ alert: "Product added to cart", open: true });
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
    setAlert({ alert: "Product removed from cart", open: true });
  };

  const clearCart = () => {
    setProducts([]);
    saveToLocalStorage("cartProducts", []);
  };

  const contextValue = {
    products,
    setProducts,
    addProduct,
    removeProduct,
    alert,
    setAlert,
    clearCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
}

export default Context;
