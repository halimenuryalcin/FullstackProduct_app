import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
