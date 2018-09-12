import React from "react";
import { store } from "../../redux/store/store";
import { updateNameAction, error, disable } from "../../redux/action/action";
import { connect } from "react-redux";

class TryReduxComponent extends React.Component {
  handleOnClick() {
    // store.dispatch(updateNameAction(this.input.value));
    // store.dispatch(error("this_error"));
    store.dispatch(disable("11"));
  }
  render() {
    const name = this.props.name;
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <input
          type="button"
          value="changeStore"
          onClick={this.handleOnClick.bind(this)}
        />
        <p>{name}</p>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    name: state.showAboutPerson.msg
  };
}
function mapDispatchToProps(dispatch, ownProps) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TryReduxComponent);
