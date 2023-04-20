import { useState } from "react";

function FunctionComponent() {
  const [plus, setPlus] = useState(0);
  const increase = () => {
    setPlus(plus + 1);
  };

  const alertMsg = (e) => {
    alert(`${e} 현재 숫자는 ${plus}입니다!`);
  };

  const consoleMsg = (e, msg) => {
    console.log(e.target);
    console.log(`${msg}`);
  };
  return (
    <>
      <div>Number Counter</div>
      <h1>{plus}</h1>
      {/* 인자가 없는 경우 함수 이름만 전달 */}
      <button onClick={increase}>더하기</button>
      <br />
      {/* 인자가 있는 경우 : 익명화살표함수로 감싸서 처리 */}
      <button onClick={() => alertMsg("hi")}>alert 띄우기</button>
      <button onClick={(e) => consoleMsg(e, "hellooo")}>console 띄우기</button>
    </>
  );
}
export default FunctionComponent;
