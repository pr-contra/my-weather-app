import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { AppStateProvider, UserLocationProvider } from './context/providers';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <UserLocationProvider>
      <AppStateProvider>
        <App />
      </AppStateProvider>
    </UserLocationProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
