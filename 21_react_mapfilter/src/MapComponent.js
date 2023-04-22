import { useState } from "react";

function MapComponent() {
  const [alphabet, setAlphabet] = useState([
    { id: 1, value: "a" },
    { id: 2, value: "p" },
    { id: 3, value: "p" },
    { id: 4, value: "l" },
    { id: 5, value: "e" },
  ]);

  console.log(alphabet);

  const [txt, inputTxt] = useState("");

  const insert = () => {
    const newTxt = alphabet.concat({
      id: alphabet.length + 1,
      value: txt,
    });
    if (txt.trim() !== "") {
      setAlphabet(newTxt);
      inputTxt("");
    }
  };

  const shift = (id) => {
    // filter()
    // callback 테스트 통과하는 모든 요소를 모아서 새로운 배열 반환
    // true 요소 유지 / false 요소 버림
    const dlt = alphabet.filter((value) => value.id !== id);
    setAlphabet(dlt);
  };

  const activeEnter = (e) => {
    console.log(e.key);
    if (e.key === "ArrowUp") {
      insert();
    }
  };

  return (
    <>
      <input
        type="text"
        value={txt}
        onChange={(e) => inputTxt(e.target.value)}
        onKeyDown={(e) => activeEnter(e)}
      />
      <button onClick={insert}>push</button>
      <ol>
        {/* <li>a</li> */}
        {alphabet.map((v) => (
          <li onDoubleClick={() => shift(v.id)} key={v.id}>
            {v.value}
          </li>
        ))}
      </ol>
    </>
  );
}

export default MapComponent;
