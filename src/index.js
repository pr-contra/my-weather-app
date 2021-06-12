import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { ToastProvider } from 'react-toast-notifications';
import { GlobalStyles, theme } from './theme';
import App from './App';
import { AppStateProvider, UserLocationProvider } from './context/providers';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ToastProvider>
        <UserLocationProvider>
          <AppStateProvider>
            <App />
          </AppStateProvider>
        </UserLocationProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
