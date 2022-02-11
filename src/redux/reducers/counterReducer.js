import { ActionTypes } from "../contants/action-types";

export const COUNTER_KEY = "counterStore";

let initialState = {
  count: 1,
};

let counterReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case ActionTypes.INCREASE_COUNTER:
      return {
        count: state.count + 1,
      };

    case ActionTypes.DECREASE_COUNTER:
      return {
        count: state.count - 1 > 0 ? state.count - 1 : 1,
      };
    default:
      return state;
  }
};

export { counterReducer };
