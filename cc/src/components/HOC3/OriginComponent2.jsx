import React from "react";
import HOC from "./ReverseInheritanceComponent";
@HOC
export default class OriginComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 1 };
  }

  test2() {
    return 4;
  }
  componentDidMount() {
    console.log("2");
  }

  render() {
    return (
      <div>
        {this.state.number}
        {"and"}
        {this.test1()}
        这是原始组件
      </div>
    );
  }
}

// const newComponent = HOC(OriginComponent);
// export default newComponent;
