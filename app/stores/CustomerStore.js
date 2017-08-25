import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/ApplicationDispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import _ from 'lodash';

const CHANGE_EVENT = 'change';
let _customers = [];

export class CustomerStore extends EventEmitter{

  addChangeListener(callback){
      this.on(CHANGE_EVENT,callback);
  }

  removeChangeListener(callback){
    this.removeListener(CHANGE_EVENT,callback);
  }

  emitChanges(){
    this.emit(CHANGE_EVENT);
  }

  getAll(){
    return _customers;
  }

  getById(id){
    for(let i=0; i< _customers.length;i++){
      if(_customers[i].id === id){
        return _customers[i];
      }
    }
  }
}

const customerStore = new CustomerStore();

AppDispatcher.register((action)=>{
  switch(action.actionType){
    case ActionTypes.INITIALIZE:
       _customers = action.initialData.customers;
       customerStore.emitChanges();
       break;
     case ActionTypes.CREATE_CUSTOMER:
       _customers.push(action.customer);
       customerStore.emitChanges();
       break;
    case ActionTypes.UPDATE_CUSTOMER:
      let objIndex = _customers.findIndex((customer => customer.id == action.customer.id));
      _customers[objIndex] = action.customer;
      customerStore.emitChanges();
      break;
    case ActionTypes.DELETE_CUSTOMER:
        _.remove(_customers,(customer)=>action.id === customer.id);
        customerStore.emitChanges();
        break;
     default:
      //return true;
  }
});

export default customerStore;
