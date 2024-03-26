import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import SpellCheckFunc from './SpellCheckFunc';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SpellCheckFunc />
  </React.StrictMode>
);

reportWebVitals();
