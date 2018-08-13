import React from "react";
import PropTypes from "prop-types";
class ChildComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.userName}</p>
        <p>2323</p>
      </div>
    );
  }
}
ChildComponent.propTypes = {
  userName: PropTypes.number.isRequired
};

export default ChildComponent;
