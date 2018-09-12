import { createStore, applyMiddleware } from "redux";
import reducer from "../reducer/reducer";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import logger from "./logger2";
// const loggerMiddleware = createLogger();
export const store = createStore(reducer, applyMiddleware(logger()));
