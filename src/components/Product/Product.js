import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, img, price } = props.product;
  return (
    <div>
      <div className="col">
        <div className="card h-100">
          <img src={img} className="card-img-top border-bottom" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Price: ${price} </p>
          </div>
          <div className="card-footer bg-white">
            <button type="button" class="btn btn-outline-primary">
              Add To Cart <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
