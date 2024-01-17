import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { useState } from "react";

interface OrderComponentProps {
  label: string;
  orderType: "date" | "value";
}

export default function OrderComponent({
  label,
  orderType,
}: OrderComponentProps) {
  const { orderProductsByDate, orderProductsByValue } =
    useContext(ProductContext);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const handleChange = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }

    orderType === "value"
      ? orderProductsByValue(order)
      : orderProductsByDate(order);
  };

  return (
    <div>
      <p>{label}</p>
      <button onClick={handleChange}>{order}</button>
    </div>
  );
}
