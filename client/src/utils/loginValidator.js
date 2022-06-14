export const loginValidator = ({ email, password }) => {

    if (!email && !password) {
        return {
            status: false,
            message: "Please enter email id & password"
        };
    } else if (email.length < 3) {
        return {
            status: false,
            message: "Please enter a valid email id"
        };
    } else if (password.length < 6) {
        return {
            status: false,
            message: "Password length should be atleast 6 digits"
        };
    } else {
        return { status: true };
    }
}