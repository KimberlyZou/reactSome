import React from "react";
let getDisplayName = component => {
  console.log(component.displayName);
  console.log(component.name);
  console.log("Component");
  return component.displayName || component.name || "Component";
};
export default PackageComponent => componentTitle =>
  class HOC extends React.Component {
    constructor(props) {
      super(props);
    }
    static displayName = `HOC(${getDisplayName(PackageComponent)})`;
    render() {
      return (
        <div>
          <header>
            <h1>{componentTitle ? componentTitle : ""}</h1>
          </header>
          <PackageComponent />
        </div>
      );
    }
  };
