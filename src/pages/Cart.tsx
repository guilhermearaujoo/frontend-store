import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import CartProduct from "../components/CartProduct";
import { getFromLocalStorage } from "../utils/localStorageHandler";

export default function Cart() {
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    const productsFromLocalStorage = getFromLocalStorage("cartProducts");

    setProducts([...products, ...productsFromLocalStorage]);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}
    </div>
  );
}
