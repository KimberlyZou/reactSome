import React from "react";
import styles from "./View2.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
class View2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles.container}>View2</div>;
  }
}
export default View2;
