import './polyfill'; // Import the polyfill at the top
import React from 'react';
import ReactDOM from 'react-dom';
import App from '@/App'; // Use alias for src

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);