import React from 'react';
import './app.scss';
import Browse from './pages/Browse/Browse';
import Watch from './pages/Watch/Watch';
import MyAccount from './pages/MyAccount/MyAccount';
import { Router } from './routes/Router';
import { useSelector } from 'react-redux';
import axios from 'axios';

function App() {
  const token = useSelector(state => state.authReducer.token);
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

  return (
    <div>
      {/* <Browse /> */}
      {/* <Watch /> */}
      {/* <MyAccount /> */}
      <Router />
    </div>
  );
}

export default App;
