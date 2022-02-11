import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  // const { products } = useSelector((state) => state.cart);

  // RETRIVING DATA
  const cartData = useSelector((state) => state.cart);
  const originalPrice = cartData.totalPrice;
  const totalQuantity = cartData.totalQuantity;
  const discountedAmount = (10 / 100) * originalPrice;
  const totalAmount = originalPrice - discountedAmount;

  const renderProducts = cartData.products.map((product) => {
    const { id, title, price, category, image, description, quantity } =
      product;

    return (
      <div className="four wide column" key={id}>
        <div className="ui link cards">
          <div className="card">
            <div className="image">
              <img src={image} alt={title} />
            </div>
            <div className="content">
              <div className="header">{description}</div>
              <div className="meta price">$ {price}</div>
              <div className="meta">{category}</div>
              <div className="meta">Quantity: {quantity}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <h2 className="avoidHeaderView">
        Your Cart <i className="fas fa-cart-plus"></i>
      </h2>
      <div className="ui grid container">{renderProducts}</div>
      <div className="details">
        <br />
        <br />
        <span className="label">Total Quantity: {totalQuantity}</span>
        <br />
        <span className="label strikeOut">
          Original Price $ {originalPrice}
        </span>
        <br />
        <span className="label">
          Discount Price: $ {parseFloat(discountedAmount).toFixed(2)} (10% of{" "}
          {originalPrice})
        </span>
        <br />
        <p className="labelFontBig">
          Total Amount: $ {parseFloat(totalAmount).toFixed(2)}
        </p>
        <button className="navigationBtn">CHECKOUT / BUY</button>
      </div>
      <Link to="/">
        <button className="navigationBtn">Navigate To Home Screen</button>
      </Link>
    </>
  );
}
