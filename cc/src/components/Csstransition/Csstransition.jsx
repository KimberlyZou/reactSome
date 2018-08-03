import React from "react";
import styles from "./Csstransition.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group"; // ES6
class Csstransition extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world", "click", "me"] };
    this.handleAdd = this.handleAdd.bind(this);
    this.handJump = this.handJump.bind(this);
  }
  handleAdd() {
    const newItems = this.state.items.concat([prompt("Enter some text")]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }
  handJump() {
    prompt("tell me ");
  }
  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
        <button onClick={this.handJump}>pop</button>
      </div>
    );
  }
}
export default Csstransition;
