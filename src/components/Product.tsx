import { ProductWIthDateType } from "../types/product";

interface ProductProps {
  product: ProductWIthDateType;
}

export default function Product({ product }: ProductProps) {
  return (
    <div>
      <img src={product.image} alt={product.title} width={50} height={50} />
      <h3>{product.title}</h3>
      <p>{product.price}</p>
      <button>Add</button>
    </div>
  );
}
