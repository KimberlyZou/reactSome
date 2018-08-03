import {content} from '../content'

export function readNameAction(users){
    return{
        type:content.SAVE_NAME,
        users:users||''
    }
}
export function requestGet(arm){
    return {
        type:content.GET_STATE,
        arm:arm
    }
} 
function receiveGet(arm,users) {
  return {
    type: content.RECEIVE_POSTS,
    users:users,
    arm:arm
  }
}

export function fetchPosts(arm) {
    return function (dispatch) {
      dispatch(requestGet(arm))
 
      return fetch(`/json/${arm}`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
              dispatch(receiveGet(arm, json))
        )
    }

}