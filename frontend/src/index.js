import React from 'react';
import ReactDOM from 'react-dom/client';

import 'index.css';
import 'styles/variables/color-variables.css'
import 'styles/variables/spacing-variables.css'
import 'styles/variables/font-variables.css'
import 'styles/variables/radius-variables.css'
import 'styles/animation/scale-on-interaction.css'
import 'styles/variables/shadow-variables.css'
import 'styles/variables/border-variables.css'

import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
