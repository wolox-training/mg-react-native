const initialState = { matches: [], loading: true, error: false };

const prevGames = (state = initialState, action) => {
  switch (action.type) {
    case 'MATCHES_SUCCESS':
      return {
        matches: action.payload,
        loading: false,
        error: false
      };
    case 'MATCHES_FAILED':
      return {
        matches: [],
        loading: false,
        error: true
      };
    case 'MATCHES_LOADING':
      return {
        ...initialState,
        loading: true
      };
    default:
      return state;
  }
};

export default prevGames;
