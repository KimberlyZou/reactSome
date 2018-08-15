import React from "react";
const getDisplayName = component =>
  component.displayName || component.name || "Component";
export default (WrappedComponent, title = "默认标题") =>
  class HOC extends React.Component {
    // constructor(props) {
    //   super(props);
    // }
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    render() {
      return (
        <fieldset>
          <legend>{title}</legend>
          <p>{this.props.name}</p>
          {console.log(this.props)}
          <WrappedComponent {...this.props} />
        </fieldset>
      );
    }
  };
