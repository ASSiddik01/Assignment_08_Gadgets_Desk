import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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

  const [cart, setCart] = useState([]);

  // Handle Cart Button
  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      newCart = [...rest, exists];
    }

    // Show Alert
    if (newCart.length > 4) {
      alert("Opps..., you don't select more than 4 items");
      return;
    }
    setCart(newCart);
  };

  // Handle Choose One Button
  const chooseOne = () => {
    setCart([cart[Math.floor(Math.random() * cart.length)]]);
  };

  // Handle Choose Again Button
  const chooseAgain = () => {
    setCart([]);
  };

  return (
    <div className="shop_container">
      {/* Product Container */}
      <div className="product_contianer text-start">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}
        </div>
      </div>
      {/* Cart Container */}
      <div className="cart_contianer rounded-3">
        <Cart
          selectedProducts={cart}
          chooseAgain={chooseAgain}
          chooseOne={chooseOne}
        ></Cart>
      </div>
    </div>
  );
};

export default Shop;
