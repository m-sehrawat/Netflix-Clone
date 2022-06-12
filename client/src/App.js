import React from 'react';
import './app.scss';
import Browse from './pages/Browse/Browse';
import Watch from './pages/Watch/Watch';
import MyAccount from './pages/MyAccount/MyAccount';
import { Router } from './routes/Router';

function App() {
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
