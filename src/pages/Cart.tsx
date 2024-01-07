import { useContext, useEffect } from "react";
import { CartContext } from "../context/cartContext";
import { getProductsFromLocalStorage } from "../services/cartLocalStorage";
import { ProductWIthDateType } from "../types/product";
import Product from "../components/Product";

export default function Cart() {
  const { products, setProducts } = useContext(CartContext);

  useEffect(() => {
    const productsFromLocalStorage = getProductsFromLocalStorage();
    setProducts(
      productsFromLocalStorage || ([] as unknown as ProductWIthDateType)
    );
  }, []);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
