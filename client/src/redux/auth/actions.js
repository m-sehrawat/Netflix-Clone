import axios from "axios";

export const getTokenSuccess = () => {
    // return {type:};
}

export const getLoginSuccess = (data) => async (dispatch) => {
    try {
        let res = await axios.post('/login', { data });
        console.log(res);
    } catch (err) {
        console.log(err);
    }
}