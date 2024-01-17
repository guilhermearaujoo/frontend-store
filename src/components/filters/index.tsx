import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { useState } from "react";
import DateFilter from "./DateFilter";
import dayjs, { Dayjs } from "dayjs";
import NameFilter from "./NameFilter";
import ValueFilter from "./ValueFilter";
import {
  filterByDate,
  filterByName,
  filterByValue,
} from "../../utils/filterHelper";

export default function Filters() {
  const { products, setFilteredProducts, clearProducts, minPrice, maxPrice } =
    useContext(ProductContext);

  const [startTime, setStartTime] = useState<Dayjs | null>(dayjs("2020-01-1"));
  const [endTime, setEndTime] = useState<Dayjs | null>(dayjs(new Date()));
  const [values, setValues] = useState<number[]>([minPrice, maxPrice]);
  const [name, setName] = useState<string | null>(null);

  const clearFiltersAndProducts = () => {
    setStartTime(dayjs("2020-01-1"));
    setEndTime(dayjs(new Date()));
    setValues([minPrice, maxPrice]);
    setName(null);
    clearProducts();
  };

  const filter = () => {
    const filteredByDate = filterByDate(products, startTime, endTime);
    const filteredByValue = filterByValue(filteredByDate, values);
    const filteredByName = filterByName(filteredByValue, name);

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
