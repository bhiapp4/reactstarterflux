import AppDispatcher from '../dispatcher/ApplicationDispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import * as CustomersAPI from '../api/CustomersAPI';

export function saveCustomer(customer,edit){
  CustomersAPI.saveCustomer(customer,edit).then(customer =>{
    console.log(edit);
    if(edit){
      AppDispatcher.dispatch({
        actionType: ActionTypes.UPDATE_CUSTOMER,
        customer:customer
      });
    }else{
      AppDispatcher.dispatch({
        actionType: ActionTypes.CREATE_CUSTOMER,
        customer:customer
      });
    }

  }).catch(error =>{
    throw(error);
  });
}

export function deleteCustomer(customerId){
  CustomersAPI.deleteCustomer(customerId).then(()=>{
    AppDispatcher.dispatch({
      actionType:ActionTypes.DELETE_CUSTOMER,
      id:customerId
    });
  });
}
