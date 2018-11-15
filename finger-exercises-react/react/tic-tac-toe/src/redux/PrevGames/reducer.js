const initialState = { matches: [] };

const prevGames = (state = initialState, action) => {
  switch (action.type) {
    case 'MATCHES_SUCCESS':
      return {
        matches: action.payload
      };
    default:
      return state;
  }
};

export default prevGames;
