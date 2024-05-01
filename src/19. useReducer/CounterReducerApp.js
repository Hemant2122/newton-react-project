import { useReducer } from "react";
import { ChangeNameAction, DecrementAction, IncrementAction, ResetAction } from "./2. Examples/1. CounterApp/ActionObject/ActionObject";
import { reducerFunctionCounter } from "./2. Examples/1. CounterApp/reducers/CounterReducer";

// DEFAULT STATE

const DEFAULTSTATE = {
  name: "hemant",
  age: 24,
  counter: 0,
};

// REDUCER FUNCTION

// action is an Object and
/**
 * export const ResetAction = {
  type: "RESET",
}; 
*/



function CounterReducerApp() {
  const [state, dispatch] = useReducer(reducerFunctionCounter, DEFAULTSTATE);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Counter Reducer App</h1>

      <div>
        Personal Details
        <p>Name: {state.name}</p>
        <p>Age: {state.age}</p>
      </div>
      <br />
      <div>{state.counter}</div>
      <br />
      
      <div style={{
        display: "flex",
        gap: "5px"
      }}>
        <button onClick={() => {
            dispatch(IncrementAction);
        }}>Increment</button>

        <button onClick={() => {
            dispatch(DecrementAction)
        }}>Decrement</button>

        <button onClick={() => {
            dispatch(ResetAction)
        }}>Reset</button>

        <button onClick={() => {
            dispatch(ChangeNameAction)
        }}>Chage Name</button>

      </div>
    </div>
  );
}

export default CounterReducerApp;
