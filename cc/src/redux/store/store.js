import {createStore,applyMiddleware} from 'redux';
import reducer from '../reducer/reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'


const loggerMiddleware = createLogger()
export const store=createStore(reducer,applyMiddleware(thunkMiddleware,loggerMiddleware));