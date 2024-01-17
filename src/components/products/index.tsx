import { convertToFullProduct } from "../../utils/productHelper";
import { getProducts } from "../../services/productsApi";
import { useEffect, useState } from "react";
import Product from "./Product";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export default function Products() {
  const [loading, setLoading] = useState(true);
  const { setProducts, filteredProducts, setFilteredProducts } =
    useContext(ProductContext);

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
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
