import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

import { ThemeProvider } from './components/ThemeContext.js';


ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('app')
);