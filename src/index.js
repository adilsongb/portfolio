import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ApplicationContext from './context/Application';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ApplicationContext>
      <App />
    </ApplicationContext>
  </React.StrictMode>,
);

reportWebVitals();
