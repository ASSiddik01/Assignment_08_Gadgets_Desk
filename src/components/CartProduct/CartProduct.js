import React from "react";
import "./CartProduct.css";

const CartProduct = (props) => {
  // De-structuring
    const { name,img } = props.product;
  return (
    <div className="d-flex align-items-center my-2">
      <img className="rounded-circle" width={50} src={img} alt="" />
      <p className="mb-0 ms-2 fw-bold">{name}</p>
    </div>
  );
};

export default CartProduct;
