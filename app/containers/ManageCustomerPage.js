import React,{ Component } from 'react';
import Form from '../components/customer/Form';
import * as Actions from '../actions/CustomerActions';
import customerStore from '../stores/CustomerStore';
import history from '../history';
import { toast } from 'react-toastify';


export default class ManageCustomerPage extends Component{

   state = { customer:{id:'', fName:'', lName:''},edit:false };

    constructor(props){
      super(props);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    componentDidMount(){
      if(this.props.match.params.customerId === undefined){
        this.state.customer.id= this.getNextCustomerId();
        this.setState({customer:this.state.customer});
      }
      else{
        console.log(this.props);
        console.log(this.props.match.params.customerId);
        console.log(typeof(this.props.match.params.customerId));

        this.setState({customer:customerStore.getById(parseInt(this.props.match.params.customerId)),edit:true})
      }
    }

    getNextCustomerId(){
      let customers = customerStore.getAll();
      let nextCustomerId=0;
      customers.forEach(customer => {
        if(customer.id > nextCustomerId){
          nextCustomerId = customer.id;
        }
      });
      return nextCustomerId+1;
    }

    handleFormSubmit(event){
      //console.log(event);
      console.log(this.state.customer);
      Actions.saveCustomer(this.state.customer,this.state.edit);
      history.push('/customers');
      toast("Save Successfull !");
    }

    handleInputChange(event){
      this.state.customer[event.target.name]=event.target.value;
      this.setState({customer:this.state.customer});
    }

    render(){
      let props = {
        handleFormSubmit:this.handleFormSubmit,
        handleInputChange:this.handleInputChange,
        customer: this.state.customer
      }
      return(
        <Form  {...props}/>
      )
    }


}
