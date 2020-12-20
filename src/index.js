import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.less';
import App from './App';

import './static/css/common.less';
import './static/css/font.css';
import './static/css/iconfont.css';

import configureStore from './store';
const store = configureStore();


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
     <App />
  </Provider>,
   
  // </React.StrictMode>,
  document.getElementById('root')
);

