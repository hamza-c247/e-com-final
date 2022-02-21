import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './common.css'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"

import store from "./redux/store";
import Defaultscroll from './Defaultscroll';


import { Provider } from 'react-redux';


ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
   
    <App />
    
    </Provider>
    </BrowserRouter>
  ,
  document.getElementById('root')
);


