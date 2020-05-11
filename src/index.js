import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

// you won't touch this file once you setup the project

// this is basically the printToDom functionality
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
