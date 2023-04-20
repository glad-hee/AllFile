import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "glad",
    };
    this.printConsole = this.printConsole.bind(this);
  }

  printConsole() {
    console.log(this);
    console.log("click", this.state);
  }

  printConsole2 = (msg) => {
    console.log(msg);
  };

  render() {
    return (
      <div>
        클래스형 컴퍼넌트에서 이벤트 사용해보기
        <button onClick={this.printConsole}>Print Console</button>
        <button onClick={() => this.printConsole2("hihi")}>
          Print Console
        </button>
      </div>
    );
  }
}

export default ClassComponent;
