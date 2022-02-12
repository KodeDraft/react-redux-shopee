import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  selectedProduct,
  removeSelectedProduct,
} from "../redux/actions/productActions";
// LOADER => INSTALLED
import { Audio } from "react-loader-spinner";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        alert("Check Your Internet Connection");
      });

    dispatch(selectedProduct(response.data));
  };
  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  return (
    <div className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div className="loaderCenter">
          <p id="colorOrange">Loading..</p>
          <Audio heigth="100" width="500" color="orange" ariaLabel="loading" />
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider displayNone"></div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="sameRow">
                  <div className="counter">
                    <div className="details__incDec">
                      <span className="dec" onClick={decQuantity}>
                        <i class="fas fa-minus"></i>
                      </span>
                      <span className="quantity">{quantity}</span>
                      <span
                        className="inc"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        <i className="fas fa-plus"></i>
                      </span>
                    </div>
                  </div>

                  {/* ADD TO CART BUTTOMN */}
                  <div
                    className="ui animated button"
                    tabIndex="0"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { product, quantity },
                      })
                    }
                  >
                    <div className="hidden content">
                      <i className="shop icon"></i>
                    </div>
                    <div className="visible content">Add to Cart</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
