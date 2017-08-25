import React,{ Component } from 'react';
import  List from '../components/customer/List';
import customerStore from '../stores/CustomerStore';
import * as Actions from '../actions/CustomerActions';
import history from '../history';
import { toast } from 'react-toastify';

export default class CustomerPage extends Component{
  state = {customers:[]};

  constructor(){
    super();
    this.routeToAddPage = this.routeToAddPage.bind(this);
  }

  componentDidMount(){
    this.setState({customers:customerStore.getAll()});
    customerStore.addChangeListener(this.onchange);
  }

  componentWillUnmount(){
    customerStore.removeChangeListener(this.onchange);
  }

  routeToAddPage(){
    history.push('/manageCustomer');
  }

  routeToEditPage(customerId){
    history.push('/manageCustomer/'+customerId);
  }

  deleteCustomer(customerId){
    Actions.deleteCustomer(customerId);
    toast("Deletion Successfull !");
  }

  onchange = ()=>{
    this.setState({customers:customerStore.getAll()});
  }

  render(){
    let props = {
      customers: this.state.customers,
      routeToAddPage: this.routeToAddPage,
      routeToEditPage: this.routeToEditPage,
      deleteCustomer: this.deleteCustomer
    };
    return (
      <div>
        <h1>Customer Page</h1>
        <List {...props}/>
      </div>
    );
  }
}
