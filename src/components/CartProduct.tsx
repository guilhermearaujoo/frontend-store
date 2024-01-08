import { FullProduct } from "../types/product";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

interface ProductProps {
  product: FullProduct;
}

export default function CartProduct({ product }: ProductProps) {
  const { removeProduct } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} alt={product.title} width={50} height={50} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
      <button onClick={() => removeProduct(product.id)}>Remove</button>
    </div>
  );
}
