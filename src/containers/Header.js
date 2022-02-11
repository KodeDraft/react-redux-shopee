import React from "react";
import CartButton from "./CartButtons";

const Header = () => {
  return (
    <>
      <div className="ui fixed menu">
        <div className="ui container center">
          <h2>🛍 Shopee</h2>
          <CartButton />
        </div>
      </div>
    </>
  );
};
export default Header;
