import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import CartProduct from "./CartProduct";
import { getFromLocalStorage } from "../../utils/localStorageHandler";
import { getSum } from "../../utils/cartHelper";

export default function Cart() {
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    const productsFromLocalStorage = getFromLocalStorage("cartProducts") || [];

    setProducts([...products, ...productsFromLocalStorage]);
  }, []);

  return (
    <div>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}

      <div>
        <h3>Total: {getSum(products)}</h3>
        <button>Checkout</button>
      </div>
    </div>
  );
}
