import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // Set and Get Products from products JSON file
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="shop_container">
      {/* Product Container */}
      <div className="product_contianer text-start">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
              <Product
                  key={product.id}
                  product={product}
              ></Product>
          ))}
        </div>
      </div>
      {/* Cart Container */}
      <div className="cart_contianer rounded-3">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
