import axios from 'axios';
import { server } from '../../server';

export const createFeed = (des, sol) => async dispatch => {
    dispatch({
      type: "FEED_TRY_TO_SAVE",
      payload: null
    });
    try {
        // let accessToken
        const accessToken = localStorage.getItem("accessToken");

        axios.defaults.headers.common["Authorization"] = `${accessToken}`;
        await axios.post(server + "/api/post", {
            title:des,
            text:sol
        })
        .then(response => {
            dispatch({
                type: "FEED_SAVE_SUCCESS",
                payload: response.data
            });
        })
        .catch(error => {
            console.error("Save feed error: ", error.response);
            dispatch({
                type: "FEED_SAVE_ERROR",
                payload: null
            });
        });
    } catch (err) {
        console.error('Save feed error:', err);
        dispatch({
          type: "FEED_SAVE_ERROR",
          payload: null
        });
    }
};