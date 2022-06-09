import React from 'react';
import './app.scss';
import { Login } from './pages/Auth/Login';
import Browse from './pages/Browse/Browse';

function App() {
  return (
    <div>
      <Browse />
      {/* <Login /> */}
    </div>
  );
}

export default App;
