import React from "react";
import "./Product.css";

const Product = () => {
  return (
    <div>
      <div class="col">
        <div class="card h-100">
          <img
            src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
