import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css/bundle';
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store/store';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <ReduxProvider store={store}>
      <App />
      </ReduxProvider>
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
