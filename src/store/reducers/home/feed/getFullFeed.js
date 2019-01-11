const initialState = {
    isFetching: false,
    isError: false,
    isSuccess: false,
    posts: null
};
export default (state = initialState, action) => {
    switch (action.type) {
        case "FEED_TRY_TO_GET_ALL":
            return {
                ...state,
                isFetching: true,
                posts:null
            };
        case "FEED_GET_ALL_SUCCESS":
            return {
                ...state,
                isFetching: false,
                isError: false,
                isSuccess: true,
                posts: action.payload.posts
            };
        case "FEED_GET_ALL_ERROR":
            return {
                ...state,
                isFetching: false,
                isError: true,
                isSuccess: false,
                posts:null
            };
        default:
            return state;
    }
};
  