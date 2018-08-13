import React from "react";
import styles from "./MotionComponent.css";
import { Motion, spring, presets } from "react-motion";
class MotionComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      left: 0
    };
  }
  clickHandler() {
    let targetX = 0;
    if (this.state.left === 0) {
      targetX = 200;
    } else {
      targetX = 0;
    }

    this.setState({
      left: targetX
    });
  }

  componentDidMount() {
    this.clickHandler();
  }

  render() {
    return (
      <div className="container">
        <Motion style={{ x: spring(this.state.left, presets.wobbly) }}>
          {interpolatingStyle => {
            // debugger
            return (
              <div
                style={{ transform: `translateX(${interpolatingStyle.x}px)` }}
                className="box"
              />
            );
          }}
        </Motion>
        <button onClick={this.clickHandler.bind(this)}>run</button>
      </div>
    );
  }
}
export default MotionComponent;
