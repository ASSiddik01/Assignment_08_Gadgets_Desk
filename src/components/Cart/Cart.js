import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = ({ chooseAgain, chooseOne, selectedProducts}) => {

  return (
    <div className="cart">
      <h3 className="fw-bold">Selected Items</h3>
      <div className="cart_product">
        {selectedProducts.map((selectedProduct) => (
          <CartProduct key={selectedProduct.id} product={selectedProduct}></CartProduct>
        ))}
      </div>
      <button
        onClick={chooseOne}
        type="button"
        className="d-block my-3 btn btn-outline-success text-uppercase fw-bold"
      >
        Choose 1 for me
      </button>
      <button
        onClick={chooseAgain}
        type="button"
        className="d-block my-3 btn btn-outline-secondary text-uppercase fw-bold"
      >
        Choose Again
      </button>
    </div>
  );
};

export default Cart;
