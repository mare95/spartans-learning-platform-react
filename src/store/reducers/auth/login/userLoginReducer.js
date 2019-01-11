const initialState = {
  user: null,
  token: null,
  isFetching: false,
  isError: false,
  isAuthenticated: false,
  userFinishedFetchingFromLocalStorage: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_TRY_TO_GET_ACCESS":
      return {
        ...state,
        isFetching: true
      };
    case "LOGIN_SUCCESSFULL_ACCESS_GRANTED":
      return {
        ...state,
        isFetching: false,
        isError: false,
        isAuthenticated: true,
        user: action.payload,
        token: action.payload.accessToken
      };
    case "LOGIN_ERROR_ACCESS_DENIED":
      return {
        ...state,
        isFetching: false,
        isError: true,
        isAuthenticated: false,
        user: null,
        token: null
      };

    default:
      return state;
  }
};
