import { useSelector, useDispatch } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  const IncrementBy5Handler = () => {
    dispatch({ type: "incrementby5" });
    console.log("clicked");
  };

  const decrementBy5Handler = () => {
    dispatch({ type: "decrementby5" });
    console.log("clicked");
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={IncrementBy5Handler}>Increment By 5</button>
        <button onClick={decrementBy5Handler}>decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;