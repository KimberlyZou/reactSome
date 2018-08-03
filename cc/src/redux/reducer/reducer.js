import {combineReducers} from 'redux'
import {content} from '../content'

const initState={
    name:'kimbrely'
}

function showAboutPerson(state=initState,action){
    switch(action.type){
        case content.SAVE_NAME:{
            return Object.assign({},state,{name:action.name})
        }
        default:
            return state
    }
}
const appReducer = combineReducers({

    showAboutPerson
  })
  
  export default appReducer