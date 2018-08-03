import React from "react";
import styles from "./Container.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
class Container extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.container}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={300}
        >
          <div
            key={this.props.location.pathname}
            style={{ position: "absolute", width: "100%" }}
          >
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}
export default Container;
