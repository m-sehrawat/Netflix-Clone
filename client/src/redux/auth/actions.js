import axios from "axios";
import { setItem } from "../../utils/localStorage";
import { notify } from "../../utils/notify";
import { GET_TOKEN_SUCCESS } from "./actionTypes";


export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
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