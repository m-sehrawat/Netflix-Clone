import { ChakraProvider } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import 'swiper/css/bundle';
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
