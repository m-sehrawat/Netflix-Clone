import { Route, Routes } from 'react-router-dom';
import { Login } from '../pages/Auth/Login';
import Browse from '../pages/Browse/Browse';
import { Landing } from '../pages/Landing/Landing';
import MyAccount from '../pages/MyAccount/MyAccount';
import Watch from '../pages/Watch/Watch';
import Plans from '../pages/Plans/Plans';
import StripeSuccess from '../pages/Stripe/StripeSuccess';
import StripeCancel from '../pages/Stripe/StripeCancel';
import AuthRoute from './AuthRoute';

export const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Browse />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/account" element={<MyAccount />} />
        <Route path="/plans" element={<Plans />} />
        <Route
          path="/stripe/success"
          element={
            <AuthRoute>
              <StripeSuccess />
            </AuthRoute>
          }
        />
        <Route
          path="/stripe/cancel"
          element={
            <AuthRoute>
              <StripeCancel />
            </AuthRoute>
          }
        />
      </Routes>
    </>
  );
};

//Nothing is Private for now
