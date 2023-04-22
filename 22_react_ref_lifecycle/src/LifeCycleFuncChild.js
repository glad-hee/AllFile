import { useEffect, useState } from "react";

const LifeCycleFuncChild = ({ number }) => {
  //   console.log(props);
  //   const { number } = props; // 5
  //   console.log(number);

  const [text, setText] = useState("");

  //   useEffect(() => {
  //     // mount 시점에 실행
  //     console.log("mount!");

  //     return () => {
  //       // unmount 시점에 실행
  //       console.log("unmount@");
  //     };
  //   }, []);

  //   useEffect(() => {
  //     {
  //       console.log("mount or update");
  //     }
  //   });

  useEffect(() => {
    console.log("update");
  }, [text]);

  return (
    <>
      <p>LifeCycleFuncChild</p>
      {/* <h1>{props.number}</h1> */}
      <h1>{this.props.number}</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
