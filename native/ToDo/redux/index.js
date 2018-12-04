import todos from "./AddItem/reducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  todos
});

export default createStore(reducers);
