import { ActionTypes } from "../contants/action-types";

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};

export const removeSelectedProduct = (products) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
export const increaseCounter = () => {
  return {
    type: ActionTypes.INCREASE_COUNTER,
    payload: "increase",
  };
};

export const decreaseCounter = () => {
  return {
    type: ActionTypes.DECREASE_COUNTER,
    payload: "decrease",
  };
};
