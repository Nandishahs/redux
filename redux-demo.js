const redux = require("redux");
const counterFunction = (State = { counter: 0 }, action) => {
  console.log(action);
  return(
    action.type==='increment'? 
  {counter : State.counter + 1}
    : {counter :State.counter - 1})
};
const store = redux.createStore(counterFunction)
const subscriberFunction = () => {
  const latestState = store.getState();  //gives latest state after update
  console.log(latestState);
};
store.subscribe(subscriberFunction);
store.dispatch({ type: "increment" }); // dispatch action
store.dispatch({ type: "increment" }); 
store.dispatch({ type: "increment" }); 
store.dispatch({ type: "decrement" }); 
store.dispatch({ type: "decrement" }); 