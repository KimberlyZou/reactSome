import { content } from "../content";

export function readNameAction(users) {
  return {
    type: content.SAVE_NAME,
    users: users || ""
  };
}
export function updateNameAction(name) {
  return {
    type: content.UPDATE_NAME,
    name: name || ""
  };
}
export function requestGet(arm) {
  return {
    type: content.GET_STATE,
    arm: arm
  };
}
function receiveGet(arm, users) {
  return {
    type: content.RECEIVE_POSTS,
    users: users,
    arm: arm
  };
}
export function error(msg) {
  return {
    type: content.ERRPR_MSG,
    msg: msg
  };
}
export function disable(msg) {
  return {
    type: content.DISABLE,
    msg: msg
  };
}
export function fetchPosts(arm) {
  return function(dispatch) {
    dispatch(requestGet(arm));

    return fetch(`/json/${arm}`)
      .then(
        response => response.json(),
        error => console.log("An error occurred.", error)
      )
      .then(json => dispatch(receiveGet(arm, json)));
  };
}
