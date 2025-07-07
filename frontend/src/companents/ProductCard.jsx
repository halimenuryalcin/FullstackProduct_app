import React, { useState } from "react";

function renderStars(weight) {
  const stars = [];
  const fullStars = Math.floor(weight);
  const hasHalfStar = weight % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={`full-${i}`} style={{ color: "gold", fontSize: "18px" }}>★</span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half" style={{ color: "gold", fontSize: "18px" }}>⯪</span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} style={{ color: "#ccc", fontSize: "18px" }}>★</span>);
  }

  return stars;
}

function ProductCard({ product }) {
  const [selectedColor, setSelectedColor] = useState("yellow");

  const colorMap = {
    yellow: "#F5E97B",
    rose: "#F7C1CC",
    white: "#F0F0F0"
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        boxSizing: "border-box",
      }}
    >
      <img
        src={product.images[selectedColor]}
        alt={product.name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <h3>{product.name}</h3>
      <p>${product.priceUSD.toFixed(2)}</p>

     
      <div style={{ margin: "8px 0" }}>
       <p> {renderStars(product.weight)} {product.weight}/5</p>
      </div>

      <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
        {Object.keys(product.images).map((color) => {
          const isSelected = selectedColor === color;
          return (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{
                width: "20px",
                height: "20px",
                borderRadius: "50%",
                backgroundColor: colorMap[color] || "#ccc",
                border: "1px solid #aaa",
                outline: isSelected ? "1px solid #555" : "none",
                outlineOffset: "3px",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              title={color}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
