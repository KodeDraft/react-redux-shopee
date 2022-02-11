import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import cartReducer from "./cartReducer";
import { counterReducer } from "./counterReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  cart: cartReducer,
  counterStore: counterReducer,
});
export default reducers;
