import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartButton() {
  const { products } = useSelector((state) => state.cart);
  console.log(products.length);

  if (products.length < 1) {
    console.log("No Products 😔");
  }
  return (
    <div className="fixed">
      <Link to="/cart">
        <div className="cartButton">
          <div className="sameRow">
            <div className="buttonDiv bg-b-orange">
              <i className="fas fa-cart-plus"></i>
              <span> {products.length}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
