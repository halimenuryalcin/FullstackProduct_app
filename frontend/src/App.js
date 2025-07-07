import React, { useEffect, useState } from "react";
import ProductList from "./companents/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://localhost:7112/api/Products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
     
      <ProductList products={products} />
    </div>
  );
}

export default App;
