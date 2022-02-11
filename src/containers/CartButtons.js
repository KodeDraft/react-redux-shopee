import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function CartButton() {
  const { totalQuantity } = useSelector((state) => state.cart);

  console.log("====================================");
  console.log(totalQuantity);
  console.log("====================================");

  if (totalQuantity.value < 2) {
    console.log("!23");
  } else {
    console.log("sdsd");
  }
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
