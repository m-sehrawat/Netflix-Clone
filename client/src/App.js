import React from 'react';
import './app.scss';
import { Login } from './pages/Auth/Login';
import Browse from './pages/Browse/Browse';
import Watch from './pages/Watch/Watch';
import MyAccount from './pages/MyAccount/MyAccount';

function App() {
  return (
    <div>
      <Browse />
      {/* <Login /> */}
      {/* <Watch /> */}
      {/* <MyAccount /> */}
    </div>
  );
}

export default App;
