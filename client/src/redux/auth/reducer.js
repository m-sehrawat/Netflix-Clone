import { getItem } from "../../utils/localStorage";
import { GET_TOKEN_SUCCESS, REMOVE_TOKEN_SUCCESS } from "./actionTypes";

const initState = {
    token: getItem('token') || "",
    user: getItem('user') || {}
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TOKEN_SUCCESS:
            return { ...state, token: payload.token, user: payload.user };
        case REMOVE_TOKEN_SUCCESS:
            return { ...state, token: "", user: {} };
        default:
            return state;
    }
}