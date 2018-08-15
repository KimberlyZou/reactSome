import React from "react";
import NomalComponent from "./NomalComponent";
class OutNomalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "kimberly",
      age: 18
    };
  }

  render() {
    return (
      <div>
        <NomalComponent {...this.state} />
      </div>
    );
  }
}

export default OutNomalComponent;
