import PropTypes from "prop-types";
import { useState } from "react";

function FunctionComponent({ name, age }) {
  // const list = 'abc'
  const [counter, setCounter] = useState(0);
  console.log(counter);
  //   console.log(props);

  //   props = { name: "김서윤", age: "33" };
  const onClick = () => {
    setCounter(counter + 1);

    console.log("클릭");
  };

  const [state, setState] = useState("");

  const join = () => {
    setState("안녕하세요");
  };

  const out = () => {
    setState("안녕히가세요");
  };
  return (
    <div>
      <h1>Hello World, Function Component</h1>
      <h5>{counter}</h5>
      <button onClick={onClick}>UP</button>
      <hr />
      <button onClick={join}>입장</button>
      <button onClick={out}>퇴장</button>
      <h2>{state}</h2>
      {/* <h5>{name}</h5>
      <h5>{age}</h5> */}
    </div>
  );
}

// or
// const FunctionComponent = () => {}

// 부모에서 아무것도 할당하지 않았을 때 이러한 기본값으로 나옴
FunctionComponent.defaultProps = {
  name: "최희성",
  age: "26",
};

FunctionComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string,
};

export default FunctionComponent;
