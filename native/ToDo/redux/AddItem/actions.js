export default (actionCreator = {
  addTodo: text => ({
    type: "ADD_TODO",
    payload: text
  }),
  deleteTodo: id => ({
    type: "DELETE_TODO",
    payload: id
  })
});
