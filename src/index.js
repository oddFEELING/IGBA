import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Pages/root/App';

//-->  render react component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
