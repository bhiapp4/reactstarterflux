import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import CustomerPage from './containers/CustomerPage';
import Header from './components/common/Header';
import NotFound from './components/NotFound';
import ManageCustomerPage from './containers/ManageCustomerPage';
import { ToastContainer, toast } from 'react-toastify';


export const App = ()=> (
  <div>
    <Header />
      <ToastContainer
            position="top-right"
            type="default"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover/>
    <div className="container container-fluid">
      <Main />
    </div>
  </div>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/customers' component={CustomerPage}/>
      <Route path='/manageCustomer/:customerId' component={ManageCustomerPage}/>
      <Route path='/manageCustomer' component={ManageCustomerPage}/>
      <Route component={NotFound} />
    </Switch>
  </main>
);
