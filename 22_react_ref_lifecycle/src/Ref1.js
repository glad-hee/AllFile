import { useState } from "react";
import { useRef } from "react";

function Ref1() {
  // 1. ref 객체 만들기
  const inputRef = useRef();

  const handleFocus = () => {
    // useRef() 만든 객체의 current 값으로 접근
    console.log(inputRef.current);
    inputRef.current.focus();
    // focus() 지정된 html요소에 포커스설정
  };

  const handleDisabled = () => {
    inputRef.current.disabled = true;
  };
  return (
    <>
      <p>함수형 컴퍼넌트에서 버튼 클릭시 input focusing</p>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>focus</button>
      <button onClick={handleDisabled}>disabled</button>
    </>
  );
}

export default Ref1;
