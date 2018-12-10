import { completeTypes, createTypes } from "redux-recompose";

import { getBooks } from "../../service";

export const actions = createTypes(completeTypes(["BOOKS"]), "@@BOOKS");

export const actionCreators = {
  getBooks: () => ({
    type: actions.BOOKS,
    target: "books",
    service: getBooks
  })
};

export default actionCreators;
