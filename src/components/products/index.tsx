import Product from "./Product";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export default function Products() {
  const { filteredProducts } = useContext(ProductContext);

  return (
    <div>
      {filteredProducts.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
