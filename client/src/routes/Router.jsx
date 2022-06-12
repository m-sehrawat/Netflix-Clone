import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Auth/Login";
import Browse from "../pages/Browse/Browse";
import { Landing } from "../pages/Landing/Landing";

export const Router = () => {

    return (
        <>
            <Routes>
                <Route path="/" element={<Browse />} />
                <Route path="/landing" element={<Landing />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </>
    );
};