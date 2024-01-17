import { FullProduct } from "../../types/product";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";

interface ProductProps {
  product: FullProduct;
}

export default function Product({ product }: ProductProps) {
  const { addProduct } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} alt={product.title} width={50} height={50} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p
        style={{ margin: "10px" }}
      >{`${product.inclusionDate.getUTCMonth()} / ${product.inclusionDate.getFullYear()}`}</p>
      <button onClick={() => addProduct(product)}>Add</button>
    </div>
  );
}
