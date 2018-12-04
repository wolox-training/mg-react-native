let initialState = [
  { text: "item 1", id: 0, checked: false },
  { text: "item 2", id: 1, checked: false },
  { text: "item 3", id: 2, checked: false }
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
      return {
        id: action.payload
        // esto esta mal
      };
    default:
      return state;
  }
};

export default todos;
