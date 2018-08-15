import React from "react";
import withHeader from "./WrappedComponent";

class Demo extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  render() {
    return <div>我是一个普通组件</div>;
  }
}

const WithHeaderDemo = withHeader(Demo);
export default WithHeaderDemo;
