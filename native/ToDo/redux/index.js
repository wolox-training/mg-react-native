import todos from "./AddItem/reducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import books from "../redux/Books/reducer";
import { fetchMiddleware } from "redux-recompose";
import thunk from "redux-thunk";

const middlewares = [thunk, fetchMiddleware];

const reducers = combineReducers({
  todos,
  books
});

export default createStore(reducers, applyMiddleware(...middlewares));
