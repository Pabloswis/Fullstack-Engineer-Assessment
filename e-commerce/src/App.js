import { useEffect, useState } from "react";
import axios from "axios";
import { Cards } from "./components/Cards";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const response = axios.get("http://localhost:3001");
    response.then((res) => setProducts(res.data));
  }, []);

  return (
    <div>{products ?<Cards products={products} /> : <h2>Cargando</h2>}</div>
  );
}

export default App;
