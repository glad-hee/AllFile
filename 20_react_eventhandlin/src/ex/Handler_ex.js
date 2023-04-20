import React from "react";

class Handler_ex extends React.Component {
  constructor() {
    super();

    this.state = {
      msg: "Hello World!",
    };
    this.change = this.change.bind(this);
  }

  change() {
    this.setState({ msg: "Goodbye World!" });
  }
  render() {
    return (
      <div>
        <button onClick={this.change}>클릭</button>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}

export default Handler_ex;
