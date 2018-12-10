import Immutable from "seamless-immutable";
import { createReducer, completeReducer, completeState } from "redux-recompose";

import { actions } from "./actions";

const stateDescription = {
  books: []
};

const initialState = completeState(stateDescription);

const reducerDescription = {
  primaryActions: [actions.BOOKS]
};

const books = createReducer(
  Immutable(initialState),
  completeReducer(reducerDescription)
);

export default books;
