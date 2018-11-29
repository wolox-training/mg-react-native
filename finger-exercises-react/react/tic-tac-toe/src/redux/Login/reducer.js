const initialState = { logged: false, loading: true };

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGGED_SUCCESS':
      return {
        logged: true,
        loading: false
      };
    case 'LOGGED_FAILED':
      return {
        logged: false,
        loading: false
      };
    default:
      return state;
  }
};

export default login;
