import { useSelector, useDispatch } from "react-redux";
import {
  increaseCounter,
  decreaseCounter,
} from "../redux/actions/productActions";
import { COUNTER_KEY } from "../redux/reducers/counterReducer";

export default function Counter() {
  let dispatch = useDispatch();

  // handle click events
  let increaseBtn = () => {
    dispatch(increaseCounter());
  };

  // handle click events
  let decreaseBtn = () => {
    dispatch(decreaseCounter());
  };

  // view data from store
  let viewCounter = useSelector((state) => {
    return state[COUNTER_KEY];
  });

  return (
    <div>
      <button onClick={increaseBtn}>+</button>
      <span>{viewCounter.count}</span>
      <button onClick={decreaseBtn}>-</button>
    </div>
  );
}
