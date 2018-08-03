import React from "react";
import styles from "./View1.css";
class View1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className={styles.container}>View1</div>;
  }
}
export default View1;
