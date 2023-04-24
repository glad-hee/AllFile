import { useState, useRef, useMemo } from "react";

const UseMemoTest = () => {
  const [number, setNumber] = useState("");

  const [list, setList] = useState([]);

  const inputNumber = useRef();

  const insert = () => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
    inputNumber.current.focus();
  };

  const getAverage = (numbers) => {
    console.log("평균값계산중..!");
    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((a, b) => a + b);
    return sum / numbers.length;
  };

  //  수행한 연산의 결과값을 기억함으로써 계산을 최적화함
  const avg = useMemo(() => {
    return getAverage(list);
  }, [list]);

  return (
    <>
      <h1>useMemo hook</h1>

      <input
        type="number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
        }}
        ref={inputNumber}
      />
      <button onClick={insert}>parseInt</button>

      <br />
      <ul>
        {list.map((v, idx) => (
          <li key={idx}>{v}</li>
        ))}
      </ul>
      <h2>평균값 : {avg}</h2>
    </>
  );
};

export default UseMemoTest;
