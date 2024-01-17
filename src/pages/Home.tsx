import { convertToFullProduct } from "../utils/productHelper";
import { getProducts } from "../services/productsApi";
import { ProductContext } from "../context/productContext";
import { useContext } from "react";
import { useEffect, useState } from "react";
import Alert from "../components/alert";
import Cart from "../components/cart";
import CartContext from "../context/cartContext";
import Filters from "../components/filters";
import Order from "../components/order";
import Products from "../components/products";

export default function Home() {
  const { setProducts, setFilteredProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const saveProductsFromApi = async () => {
      setLoading(true);
      const response = await getProducts();
      if (response.code === "success") {
        const productsWithDate = convertToFullProduct(response.data);
        setProducts(productsWithDate);
        setFilteredProducts(productsWithDate);
      } else {
        console.log(response.message);
      }
      setLoading(false);
    };

    saveProductsFromApi();
  }, []);

  return (
    <div className="layout">
      <CartContext>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "50px" }}
            >
              <Filters />
              <Order />
            </div>
            <Products />
            <Cart />
            <Alert />
          </>
        )}
      </CartContext>
    </div>
  );
}
