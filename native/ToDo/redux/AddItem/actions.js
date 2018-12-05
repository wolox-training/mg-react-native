export default {
  addTodo: text => ({
    type: "ADD_TODO",
    payload: text
  }),
  deleteTodo: id => ({
    type: "DELETE_TODO",
    payload: id
  }),
  toggleTodo: id => ({
    type: "TOGGLE_TODO",
    payload: id
  }),
  deleteCheckedTodo: () => ({
    type: "DELETE_CHECKED_TODO"
  })
};
