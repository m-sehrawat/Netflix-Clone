import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import Browse from '../pages/Browse/Browse';
import MyAccount from '../pages/MyAccount/MyAccount';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/MyAccount" element={<MyAccount />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
