import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cart() {
  const { products } = useSelector((state) => state.cart);
  console.log(products);

  const cost = products.map((itr) => {
    return itr.price;
  });
  const totalPrice = cost.reduce((prevValue, currValue) => {
    return prevValue + currValue;
  }, 0);
  const discount = (10 / 100) * totalPrice;
  const renderProducts = products.map((product) => {
    const { id, title, price, category, image, description } = product;
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
            </div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="ui grid container">{renderProducts}</div>
      <div className="details">
        <br />
        <br />
        <span className="label strikeOut">Original Price $ {totalPrice}</span>
        <br />
        <span className="label">
          Discount Price $ {parseFloat(discount).toFixed(2)}
        </span>
        <br />
        <span className="label marginTopSmall">
          Total Amount: $ {parseFloat(totalPrice - discount).toFixed(2)}
        </span>
        <button className="navigationBtn">CHECKOUT / BUY</button>
      </div>
      <Link to="/">
        <button className="navigationBtn">Navigate To Home Screen</button>
      </Link>
    </>
  );
}
