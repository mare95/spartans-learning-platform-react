const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    data: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "FEED_TRY_TO_SAVE":
            return {
                ...state,
                isFetching: true,
                data:null
            };
        case "FEED_SAVE_SUCCESS":
            return {
                ...state,
                isFetching: false,
                isError: false,
                isSuccess: true,
                data: action.payload
            };
        case "FEED_SAVE_ERROR":
            return {
                ...state,
                isFetching: false,
                isError: true,
                isSuccess: false,
                data:null
            };
        default:
            return state;
    }
};
  