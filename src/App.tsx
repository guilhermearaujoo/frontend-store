import Home from "./pages/Home";
import { useEffect, useState } from "react";
import Context from "./context/cartContext";
import Cart from "./pages/Cart";
import "./styles/index.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <p>loading...</p>
  ) : (
    <Context>
      <div className="layout">
        <Home />
        <Cart />
      </div>
    </Context>
  );
}

export default App;
