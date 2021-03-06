import React from "react";

const CartProduct = (props) => {
  // De-structuring
    const { name,img } = props.product;
  return (
    <div className="d-flex align-items-center my-2">
      <img className="rounded-circle" width={50} src={img} alt="" />
      <h5 className="mb-0 ms-2 fw-bold">{name}</h5>
    </div>
  );
};

export default CartProduct;
