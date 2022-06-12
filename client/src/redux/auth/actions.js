import axios from "axios";
import { removeItem, setItem } from "../../utils/localStorage";
import { notify } from "../../utils/notify";
import { GET_TOKEN_SUCCESS, REMOVE_TOKEN_SUCCESS } from "./actionTypes";


export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
}

export const removeTokenSuccess = () => {
    return { type: REMOVE_TOKEN_SUCCESS };
}


export const getLoginSuccess = (data, toast) => async (dispatch) => {
    try {
        let res = await axios.post('/login', data);
        res = res.data;
        dispatch(getTokenSuccess(res));
        setItem('token', res.token);
        setItem('user', res.user);
        notify(toast, 'Login Successfully', 'success')
    } catch (err) {
        console.log(err.response.data);
        notify(toast, err.response.data.message, 'error');
    }
}


export const getLogoutSuccess = (toast) => (dispatch) => {
    removeItem('token');
    removeItem('user');
    dispatch(removeTokenSuccess());
    notify(toast, 'Logout Successfully', 'success');
}