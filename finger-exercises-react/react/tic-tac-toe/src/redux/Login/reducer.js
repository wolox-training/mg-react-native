const initialState = { log: false, loading: true };

const logged = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_SUCCESS':
      return {
        log: true,
        loading: false
      };
    case 'LOGGED_FAILED':
      return {
        log: false,
        loading: false
      };
    default:
      return state;
  }
};

export default logged;
