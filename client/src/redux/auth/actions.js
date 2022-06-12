import axios from "axios";
import { GET_TOKEN_SUCCESS } from "./actionTypes";


export const getTokenSuccess = (payload) => {
    return { type: GET_TOKEN_SUCCESS, payload };
}


export const getLoginSuccess = (data) => async (dispatch) => {
    try {
        let res = await axios.post('/login', data);
        res = res.data;
        dispatch(getTokenSuccess(res));
    } catch (err) {
        console.log(err);
    }
}