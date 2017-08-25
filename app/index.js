import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import { App } from './App';
import history from './history';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.min.css' 

import * as InitializeActions from './actions/InitializeActions';

InitializeActions.InitializeCustomers();

ReactDOM.render(
  <Router history={ history }>
      <App/>
  </Router>,
  document.getElementById('app'));
