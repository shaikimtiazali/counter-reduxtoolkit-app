import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../features/counterSlice";
import "./style.css";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1 className="heading">Counter App</h1>
      <p className="para">Count {count}</p>
      <div className="button-container">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
