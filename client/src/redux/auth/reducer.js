import { GET_TOKEN_SUCCESS } from "./actionTypes";

const initState = {
    token: "",
    user: {}
}

export const authReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case GET_TOKEN_SUCCESS:
            return { ...state, token: payload.token, user: payload.user };
        default:
            return state;
    }
}