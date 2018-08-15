import React from "react";
import WrappedComponent from "./WrappedComponent";
const getDisplayName = component =>
  component.displayName || component.name || "Component";
export default function(WrappedComponent) {
  return class InheritanceHOC extends WrappedComponent {
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    componentWillMount() {
      // 可以方便地得到state，做一些更深入的修改。
      console.log(111);
      this.setState({
        innerText: "我被Inheritance修改了值"
      });
    }
    render() {
      return (
        <div>
          <h2>222</h2>
          <WrappedComponent />
        </div>
      );
      //   return super.render();
    }
  };
}
