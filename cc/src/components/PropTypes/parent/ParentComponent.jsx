import React from "react";
import ChildComponent from "../child/ChildComponent";
import PropTypes from "prop-types";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.parentprops = {
      userName: "kimberly",
      nickname: "kim",
      age: 23
    };
  }

  render() {
    return <ChildComponent {...this.parentprops} />;
  }
}
export default ParentComponent;
