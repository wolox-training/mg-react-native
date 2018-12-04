import todos from "./AddItem/reducer";
import { createStore, combineReducers } from "redux";

const reducers = combineReducers({
  todos
});

export const store = createStore(reducers);
