import React from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="row">
      {/* Product Container */}
      <div className="col-lg-9 text-start">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <Product></Product>
        </div>
      </div>
      {/* Cart Container */}
      <div className="col-lg-3 cart_contianer">
        <h1>Cart</h1>
      </div>
    </div>
  );
};

export default Shop;
