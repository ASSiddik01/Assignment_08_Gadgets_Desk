import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  // De-structuring
  const { product, handleAddToCart } = props;
  const { name, img, price } = product;

  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top border-bottom" alt="..." />
          <div className="card-body">
            <h5 className="card-title fw-bold">{name}</h5>
            <p className="card-text">Price: ${price} </p>
          </div>
          <div className="card-footer bg-white">
            <button
              onClick={() => handleAddToCart(product)}
              type="button"
              className="btn btn-outline-primary fw-bold text-uppercase"
            >
              Add To Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
