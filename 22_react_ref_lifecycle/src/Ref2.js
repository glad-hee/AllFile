import { useRef } from "react";

const Ref2 = () => {
  const ref = useRef(0);

  const plus = () => {
    ref.current -= 1;
    console.log(ref.current);
  };
  return (
    <>
      <h2>{ref.current}</h2>
      <button onClick={plus}>plus ref</button>
    </>
  );
};

export default Ref2;
