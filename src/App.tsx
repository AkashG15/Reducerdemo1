import React, { useReducer } from "react";
import "./App.css";


//Array Return krta hai yaha
const reducerFun = (state: any, action: any) => {
  // console.log("state", state);
  // console.log("action", action);
  switch (action.type) {
    case "increment":
      const newState = { ...state, count: state.count + 1,status:action.type };
      return newState;
    case "decrement":
      return { ...state, count: state.count - 1,status:action.type };
    default:
      return state;
  }
};
const initialstate = { count: 0,status:" " };

function App() {
  const [state, dispatch] = useReducer(reducerFun,initialstate);
  const incrementValue = () => {
    console.log("incrementValue check", state);
    dispatch({ type: "increment" });
  };
  const decrementValue = () => {
    console.log("decrementValue check", state);
    dispatch({ type: "decrement" });
  };
  const [] = useReducer<any>(reducerFun, { count: 0 });
  return (
    <div>

      <br />
      <p> count:{state.count} </p>
      <br />
      <br />
      <p> status:{state.status}</p>
      <br />
      <button type="button" onClick={incrementValue}>
        Increment
      </button>
      <br />
      <br />
      <button type="button" onClick={decrementValue}>
        Decrement
      </button>
    </div>
  );
}

export default App;
