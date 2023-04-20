import { useState } from "react";

function FunctionPractice() {
  const [state, setState] = useState(0);

  const increase = () => {
    setState(state + 1);
  };

  const decrease = () => {
    setState(state - 2);
  };

  const [msg, setMsg] = useState("검정색글씨");

  const [color, setColor] = useState("black");

  const redBtn = () => {
    setMsg("빨간색글씨");
    setColor("red");
  };
  const blueBtn = () => {
    setMsg("파란색글씨");
    setColor("blue");
  };

  const [title, setTitle] = useState("");

  const [key, setKey] = useState(true);

  const show = () => {
    setTitle("안녕하세요");
    setKey(false);
  };

  const hide = () => {
    setTitle("");
    setKey(true);
  };

  const [visible, setVisible] = useState(true);

  const visi = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-2</button>
      <hr />
      <h2 style={{ color: `${color}` }}>{msg}</h2>
      <button onClick={redBtn}>빨간색</button>
      <button onClick={blueBtn}>파란색</button>
      <hr />

      {key ? (
        <button onClick={show}>보여라</button>
      ) : (
        <button onClick={hide}>사라져라</button>
      )}
      <h1>{title}</h1>

      <hr />
      <button onClick={visi}>{visible ? "사라져라" : "보여라!"}</button>
      <h1>{visible && "안녕하세요"}</h1>
    </div>
  );
}

export default FunctionPractice;
