import axios from 'axios';
import { server } from '../../server';

export const getAllFeeds = () => async dispatch => {
    dispatch({
      type: "FEED_TRY_TO_GET_ALL",
      payload: null
    });
    try {
        // let accessToken
        const accessToken = localStorage.getItem("accessToken");

        axios.defaults.headers.common["Authorization"] = `${accessToken}`;
        await axios.get(server + "/api/post")
        .then(response => {
            dispatch({
                type: "FEED_GET_ALL_SUCCESS",
                payload: response.data
            });
        })
        .catch(error => {
            console.error("Get all feed error: ", error.response);
            dispatch({
                type: "FEED_GET_ALL_ERROR",
                payload: null
            });
        });
    } catch (err) {
        console.error('Get all feed error:', err);
        dispatch({
          type: "FEED_SAVE_ERROR",
          payload: null
        });
    }
};