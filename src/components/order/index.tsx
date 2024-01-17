import OrderComponent from "./OrderComponent";

export default function Order() {
  return (
    <div>
      <OrderComponent label="Ordenar por data" orderType="date" />
      <OrderComponent label="Ordenar por valor" orderType="value" />
    </div>
  );
}
