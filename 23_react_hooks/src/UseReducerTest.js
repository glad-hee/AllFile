import { useReducer } from "react";

//  dispatch로 action값보냄
//  prevNumber : 현재 state
const reducer = (prevNumber, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { value: prevNumber + 1 };
    case "DECREMENT":
      return { value: prevNumber - 1 };
    case "RESET":
      return { value: 3 };
    // default 상위 케이스가 아닐 때 실행
    default:
      return { value: prevNumber.value };
  }
};
const UseReducerTest = () => {
  const [number, dispatch] = useReducer(reducer, { value: 3 });

  const increment = () => {
    dispatch({ type: "INCREMENT" });
  };
  const decrement = () => {
    dispatch({ type: "DECREMENT" });
  };
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <h1>useReducer hook</h1>
      <h2>{number.value}</h2>

      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default UseReducerTest;
