import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { getItem } from '../utils/localStorage.js';

const AuthRoute = ({ children }) => {
  //Best to use Redux
  const user = getItem('user');
  const token = getItem('token');

  // if (!user) {
  //   return <Navigate to="/login" />;
  // }
  // return user && token ? <Route {...rest} /> : '';
  return !user && !token ? <Navigate to="/login" /> : children;
};

export default AuthRoute;
