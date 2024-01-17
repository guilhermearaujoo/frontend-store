import Home from "./pages/Home";
import "./styles/index.css";
import Filters from "./components/filters/DateFilter";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ProductContext from "./context/productContext";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ProductContext>
        <Filters />
        <Home />
      </ProductContext>
    </LocalizationProvider>
  );
}

export default App;
