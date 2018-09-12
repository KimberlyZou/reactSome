import { combineReducers } from "redux";
import { content } from "../content";

const initState = {
  name: "kimbrely",
  msg: "cc"
};

function showAboutPerson(state = initState, action) {
  switch (action.type) {
    case content.SAVE_NAME: {
      return Object.assign({}, state, { name: action.name });
    }
    case content.UPDATE_NAME: {
      return Object.assign({}, state, { name: action.name });
    }
    case content.ERRPR_MSG: {
      return Object.assign({}, state, { msg: action.msg });
    }
    case content.DISABLE: {
      return Object.assign({}, state, { msg: action.msg });
    }
    default:
      return state;
  }
}
const appReducer = combineReducers({
  showAboutPerson
});

export default appReducer;
