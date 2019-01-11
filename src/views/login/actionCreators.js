import axios from 'axios';
import { server } from '../../server';

export const login = (username, password) => async dispatch => {
    dispatch({
      type: "LOGIN_TRY_TO_GET_ACCESS",
      payload: null
    });
    try {
        await axios.post(server + "/api/signin", {
            username, password
        })
        .then(response => {
            console.log(response.data.accessToken)
            localStorage.setItem('accessToken', response.data.accessToken)
            dispatch({
                type: "LOGIN_SUCCESSFULL_ACCESS_GRANTED",
                payload: response.data
            });
        })
        .catch(error => {
            console.error("Login error: ", error.response);
            localStorage.setItem('accessToken', null)
            dispatch({
                type: "LOGIN_ERROR_ACCESS_DENIED",
                payload: null
            });
        });
    } catch (err) {
        console.error('Login error:', err);
        localStorage.setItem('accessToken', null)
        dispatch({
          type: "LOGIN_ERROR_ACCESS_DENIED",
          payload: null
        });
    }
};