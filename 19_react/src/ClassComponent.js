import React from "react"; // 클래스형에서 필수
import { Component } from "react"; // 쓰지말고 React.Component
import PropTypes from "prop-types";

class ClassComponent extends Component {
  // 클래스형 컴포넌트 render(){} 함수 필수
  render() {
    //     const name = "최희성";
    console.log(this.props);

    // this.props = { name: "", age: "" };
    const { name, age } = this.props;
    return (
      <div>
        <h1>Hello World, Class Component</h1>
        <h5>{name}</h5>
        <h5>{age}</h5>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: "라라",
  age: "24",
};

//             소문자
ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
};

export default ClassComponent;
