import { useState, useCallback, useRef } from "react";

const UseCallbackTest = () => {
  const setFocus = useRef();
  const [text, setText] = useState("");

  return (
    <>
      <h1>useCallback hook</h1>
      <input
        type="text"
        // 반복해서 생성되는 이벤트 핸드러 함수를 useCallback으로
        // 감싸주면 함수를 메모리제이션(기억)해서 컴퍼넌트가 다시
        // 랜더링되도 기억하고있는 기존 함수 그대로 사용
        onChange={useCallback((e) => {
          setText(e.target.value);
        }, [])}
        ref={setFocus}
      />
      <h2>작성한 값 : {text || "없음"}</h2>
    </>
  );
};

export default UseCallbackTest;

// useCallback vs useMemo

// const memoizedCallback = useCallback(function, deps);
// const memoizedValue = useMemo(()=> function, deps)

// useCallback : useMemo를 기반으로 만든 hook
// 단 '함수를 사용할 때' 편의성을 증진

// 공통점 : 성능 최적화

// 차이점
// - useMemo : '값'을 재사용
// => 값의 재사용을 위해 전달된 함수를 실행하고 '그 결과'를 메모리제이션

// - useCallback : '함수'를 재사용
// => '함수의 재사용'을 위해 전달된 '함수자체'를 메모리제이션
