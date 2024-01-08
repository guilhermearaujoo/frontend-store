import { convertToFullProduct } from "../utils/productHelper";
import { getProducts } from "../services/productsApi";
import { FullProduct } from "../types/product";
import { useEffect, useState } from "react";
import Product from "../components/Product";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<FullProduct[]>([]);

  useEffect(() => {
    const saveProductsFromApi = async () => {
      setLoading(true);
      const response = await getProducts();
      if (response.code === "success") {
        const productsWithDate = convertToFullProduct(response.data);
        setProducts(productsWithDate);
      } else {
        console.log(response.message);
      }
      setLoading(false);
    };

    saveProductsFromApi();
  }, []);

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        products.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
