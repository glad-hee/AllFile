import React from "react";

class LifeCycleClassChild extends React.Component {
  // 컴포넌트가 mount 되었을 때 실행
  componentDidMount() {
    console.log("mount");
  }

  // update시 실행
  componentDidUpdate() {
    console.log("update");
  }

  // unmount시 실행
  componentWillUnmount() {
    console.log("unmount");
  }
  render() {
    return (
      <>
        <p>LifeCycleClassChild</p>
        <h1>{this.props.number}</h1>
      </>
    );
  }
}

export default LifeCycleClassChild;
