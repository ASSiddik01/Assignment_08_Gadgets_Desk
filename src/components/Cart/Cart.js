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

  return (
    <div className="cart">
      <h3 className="fw-bold">Selected Items</h3>
      <div className="cart_product">
        {cartProducts.map((cartProduct) => (
          <CartProduct key={cartProduct.id} product={cartProduct}></CartProduct>
        ))}
      </div>
    </div>
  );
};

export default Cart;
