import React from "react";
import LifeCycleClassChild from "./LifeCycleClassChild";
// import LifeCycleFuncChild from "./LifeCycleFuncChild";

class LifeCycleClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 7,
      visible: true,
    };
  }

  plus = () => {
    this.setState({ number: this.state.number + 1 });
  };

  changeVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.plus}>PLUS</button>
        <button onClick={this.changeVisible}>ON / OFF</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}

export default LifeCycleClass;
