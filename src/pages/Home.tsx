import Products from "../components/products";
import CartContext from "../context/cartContext";
import Cart from "../components/cart";

export default function Home() {
  return (
    <div className="layout">
      <CartContext>
        <Products />
        <Cart />
      </CartContext>
    </div>
  );
}
