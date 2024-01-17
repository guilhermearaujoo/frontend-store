import Home from "./pages/Home";
import "./styles/index.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ProductContext from "./context/productContext";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ProductContext>
        <Home />
      </ProductContext>
    </LocalizationProvider>
  );
}

export default App;
