import React from "react";
// (1)
import HOCComponent from "./HOCComponent";
class Main extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <main>
        <p>main content</p>
        <p>{this.props.content}</p>
      </main>
    );
  }
}

const MainComponent = HOCComponent(Main)("首页");
export default MainComponent;
