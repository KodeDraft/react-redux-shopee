import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartButton() {
  const { totalQuantity } = useSelector((state) => state.cart);

  return (
    <div className="fixed">
      <Link to="/cart">
        <div className="cartButton">
          <div className="sameRow">
            <div className="buttonDiv bg-b-orange">
              <i className="fas fa-cart-plus"></i>
              <span> {totalQuantity}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
