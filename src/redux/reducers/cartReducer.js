const INITIAL_STATE = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const { product } = action.payload;
      const check = state.products.find(
        (pr) => pr.id === action.payload.product.id
      );
      if (check) {
        return state;
      } else {
        const Tprice = state.totalPrice + product.price;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: Tprice,
        };
      }
    default:
      return state;
  }
};
export default cartReducer;
