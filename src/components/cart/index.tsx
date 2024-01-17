import { useContext, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import CartProduct from "./CartProduct";
import { getFromLocalStorage } from "../../utils/localStorageHandler";
import { getSum, getQuantity } from "../../utils/cartHelper";

export default function Cart() {
  const { products, setProducts, setAlert } = useContext(CartContext);

  useEffect(() => {
    const productsFromLocalStorage = getFromLocalStorage("cartProducts") || [];

    setProducts([...products, ...productsFromLocalStorage]);
  }, []);

  const checkout = () => {
    if (products.length === 0) {
      setAlert({ alert: "Carrinho vazio!", open: true });
      return;
    }

    setProducts([]);
    setAlert({ alert: "Compra realizada com sucesso!", open: true });
  };

  return (
    <div>
      {products.map((product) => (
        <CartProduct key={product.id} product={product} />
      ))}

      <div>
        <h3>Total: {getSum(products)}</h3>
        <p>Items: {getQuantity(products)}</p>
        <button onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
