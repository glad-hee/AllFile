import LifeCycleFuncChild from "./LifeCycleFuncChild";
import { useState } from "react";
const LifeCycleFunc = () => {
  const [visible, setVisible] = useState(true);
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };

  return (
    <>
      <button onClick={plus}>PLUS</button>
      <button onClick={changeVisible}>ON / OFF</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
