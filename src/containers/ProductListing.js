import React, { useEffect } from "react";
import ProductComponent from "./ProductComponent";
import { setProducts } from "../redux/actions/productActions";
// AXIOS FOR CALLING API
import axios from "axios";
// REDUX
import { useDispatch, useSelector } from "react-redux";

export default function ProductListing() {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products: ", products);
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products") 
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
}

// https://fakestoreapi.com/products
