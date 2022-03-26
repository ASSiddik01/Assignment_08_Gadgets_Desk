import React from "react";
import CartProduct from "../CartProduct/CartProduct";
import "./Cart.css";

const Cart = (props) => {
  const cartProducts = props.product;
  //   const { name, img } = props.product;
  // if (cartProducts.length > 4) {
  //   alert("kkkk");
  //   return;
  // }
  const {chooseAgain} = props;

  return (
    <div className="cart">
      <h3 className="fw-bold">Selected Items</h3>
      <div className="cart_product">
        {cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.id} product={cartProduct}></CartProduct>
        ))}
      </div>
      <button type="button" className="d-block my-3 btn btn-outline-success text-uppercase fw-bold">Choose 1 for me</button>
      <button onClick={chooseAgain} type="button" className="d-block my-3 btn btn-outline-secondary text-uppercase fw-bold">Choose Again</button>
    </div>
  );
};

export default Cart;
