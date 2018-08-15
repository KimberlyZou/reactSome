import React from "react";
let getDisplayName = component => {
  return component.displayName || component.name || "Component";
};
export default PackageComponent => componentTitle =>
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }
    static displayName = `HOC(${getDisplayName(PackageComponent)})`;
    render() {
      const newProps = {
        content: "这是内容"
      };
      return (
        <div>
          <header>
            <h1>{componentTitle ? componentTitle : ""}</h1>
          </header>
          <PackageComponent {...newProps} />
        </div>
      );
    }
  };
