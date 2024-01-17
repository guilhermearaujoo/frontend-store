import { DatePicker } from "@mui/x-date-pickers/";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "../../context/productContext";

export default function Filters() {
  const { products, setFilteredProducts, clearProducts } =
    useContext(ProductContext);

  const [startValue, setStartValue] = useState<Dayjs | null>(
    dayjs("2020-01-1")
  );
  const [endValue, setEndValue] = useState<Dayjs | null>(dayjs(new Date()));

  const filterByDate = () => {
    const filteredProducts = products.filter((product) => {
      const productDate = dayjs(product.date);
      return (
        productDate.isAfter(startValue as Dayjs) &&
        productDate.isBefore(endValue as Dayjs)
      );
    });
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <DatePicker
        value={startValue}
        onChange={(newValue) => setStartValue(newValue)}
      />
      <DatePicker
        value={endValue}
        onChange={(newValue) => setEndValue(newValue)}
      />
      <button onClick={filterByDate}>Filter</button>
      <button onClick={clearProducts}>Clear</button>
    </div>
  );
}
