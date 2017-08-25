import AppDispatcher from '../dispatcher/ApplicationDispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import * as CustomersAPI from '../api/CustomersAPI';

export function InitializeCustomers(){
    CustomersAPI.getAll().then(customers =>{
      AppDispatcher.dispatch({
        actionType: ActionTypes.INITIALIZE,
        initialData:{
          customers: customers
        }
      });
    }).catch(error =>{
      throw (error);
    });
}
