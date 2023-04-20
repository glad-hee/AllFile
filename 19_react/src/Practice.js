import React from "react";
import PropTypes from "prop-types";

class Practice extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>{food}</h1>
        <h2>정말 맛있어요</h2>
      </div>
    );
  }
}

Practice.defaultProps = {
  food: "치킨",
};

export default Practice;
