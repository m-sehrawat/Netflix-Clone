import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import Browse from '../pages/Browse/Browse';
import { Landing } from '../pages/Landing/Landing';
import MyAccount from '../pages/MyAccount/MyAccount';
import Watch from '../pages/Watch/Watch';
import Plans from '../pages/Plans/Plans';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/plans" element={<Plans />} />
      </Routes>
    </>
  );
};
