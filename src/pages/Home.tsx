import Products from "../components/products";
import CartContext from "../context/cartContext";
import Cart from "../components/cart";
import Filters from "../components/filters";

export default function Home() {
  return (
    <div className="layout">
      <CartContext>
        <Filters />
        <Products />
        <Cart />
      </CartContext>
    </div>
  );
}
