import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get("mode"));
  // / => null
  // /?mode=Dark => Dark
  // get() querystring key의 value 값 확인

  //   const setDarkMode = () => {
  //     setSearchParams({ mode: "Dark" });
  //   };

  return (
    // <main className={`MainPage ${searchParams.get("mode")}`}>
    <main className={[`MainPage`, searchParams.get("mode")].join(" ")}>
      <h1>여기는 홈!</h1>
      <button onClick={() => setSearchParams({ mode: "Dark" })}>Dark</button>
    </main>
  );
};

export default MainPage;
