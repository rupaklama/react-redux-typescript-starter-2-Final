import React from 'react';
import ReactDOM from 'react-dom';

// additional package require for react-redux to work with typescript: npm i --save-dev @types/react-redux
import { Provider } from 'react-redux';
import { store } from './redux/store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
