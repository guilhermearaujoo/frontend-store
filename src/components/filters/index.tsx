import { FullProduct } from "../../types/product";
import { getMinValue, getMaxValue } from "../../utils/productHelper";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { useState } from "react";
import DateFilter from "./DateFilter";
import dayjs, { Dayjs } from "dayjs";
import NameFilter from "./NameFilter";
import ValueFilter from "./ValueFilter";

export default function Filters() {
  const { products, setFilteredProducts, clearProducts } =
    useContext(ProductContext);

  const minPrice = getMinValue(products);
  const maxPrice = getMaxValue(products);

  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2020-01-1"));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs(new Date()));
  const [values, setValues] = useState<number[]>([minPrice, maxPrice]);
  const [name, setName] = useState<string | null>(null);

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

  const filterByValue = (currentProducts: FullProduct[]) => {
    const filteredProducts = currentProducts.filter((product) => {
      const productValue = product.price;
      return productValue >= values[0] && productValue <= values[1];
    });
    return filteredProducts;
  };

  const filterByName = (currentProducts: FullProduct[]) => {
    const filteredProducts = currentProducts.filter((product) => {
      const productName = product.title.toLowerCase();
      return productName?.includes(name as string);
    });
    return filteredProducts;
  };

  const clearFiltersAndProducts = () => {
    setStartTime(dayjs("2020-01-1"));
    setEndTime(dayjs(new Date()));
    setValues([minPrice, maxPrice]);
    setName("");
    clearProducts();
  };

  const filter = () => {
    const filteredByDate = filterByDate(products);
    const filteredByValue = filterByValue(filteredByDate);
    const filteredByName = filterByName(filteredByValue);

    setFilteredProducts(filteredByName);
  };

  return (
    <div>
      <DateFilter
        startTime={startTime}
        endTime={endTime}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
      />
      <ValueFilter
        values={values}
        setValues={setValues}
        min={minPrice}
        max={maxPrice}
      />
      <NameFilter name={name} setName={setName} />
      <button onClick={filter}>Filtrar</button>
      <button onClick={clearFiltersAndProducts}>limpar</button>
    </div>
  );
}
