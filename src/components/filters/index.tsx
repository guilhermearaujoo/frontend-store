import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { useState } from "react";
import DateFilter from "./DateFilter";
import dayjs, { Dayjs } from "dayjs";
import { FullProduct } from "../../types/product";

export default function Filters() {
  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2020-01-1"));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs(new Date()));

  const { products, setFilteredProducts, clearProducts } =
    useContext(ProductContext);

  const filterByDate = (currentProducts: FullProduct[]) => {
    const filteredProducts = currentProducts.filter((product) => {
      const productDate = dayjs(product.inclusionDate);
      return (
        productDate.isAfter(startTime as Dayjs) &&
        productDate.isBefore(endTime as Dayjs)
      );
    });
    return filteredProducts;
  };

  const clearFiltersAndProducts = () => {
    setStartTime(dayjs("2020-01-1"));
    setEndTime(dayjs(new Date()));
    clearProducts();
  };

  const filter = () => {
    const filteredProducts = filterByDate(products);
    setFilteredProducts(filteredProducts);
  };

  return (
    <div>
      <DateFilter
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <button onClick={filter}>Filtrar</button>
      <button onClick={clearFiltersAndProducts}>limpar</button>
    </div>
  );
}
