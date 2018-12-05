let initialState = [
  { text: "Leche 1", id: 0, checked: false },
  { text: "Papa 2", id: 1, checked: false },
  { text: "Galletitas 3", id: 2, checked: false }
];

let id = 3;

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: id++,
          text: action.payload,
          checked: false
        }
      ];
    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map(todo => {
        if (todo.id === action.payload) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });
    case "DELETE_CHECKED_TODO":
      return state.filter(todo => todo.checked === false);
    default:
      return state;
  }
};

export default todos;
