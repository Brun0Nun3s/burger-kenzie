// eslint-disable-next-line no-use-before-define
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { UserProvider } from './Providers/UserContext';
import { ProductsProvider } from './Providers/ProductContext';
import { mainTheme } from './styles/theme';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <ThemeProvider theme={mainTheme}>
            <App />
          </ThemeProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);
