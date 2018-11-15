const initialState = { history: [{ squares: Array(9).fill(null) }], stepNumber: 0, xIsNext: true };

const game = (state = initialState, action) => {
  const history = state.history.slice(0, state.stepNumber + 1);
  switch (action.type) {
    case 'HANDLE_CLICK':
      return {
        history: history.concat([
          {
            squares: history[history.length - 1].squares.map(
              (square, index) => (action.payload === index ? (state.xIsNext ? 'X' : 'O') : square)
            )
          }
        ]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };

    case 'JUMP_TO':
      return {
        ...state,
        stepNumber: action.payload,
        xIsNext: action.payload % 2 === 0
      };
    default:
      return state;
  }
};

export default game;
