import React,{ PropTypes } from 'react';

export default function List(props){
  const m10 = { marginRight:'10px' };
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.customers.map(customer =>{
            return (
              <tr key={customer.id}>
              <td>{customer.fName}</td>
              <td>{customer.lName}</td>
              <td>
                <button type="button" className="btn btn-primary" style={m10} onClick={()=>props.routeToEditPage(customer.id)}>Edit</button>
                <button type="button" className="btn btn-danger" onClick={()=>props.deleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>);
          })}
        </tbody>
      </table>
      <div>
        <button type="button" className="btn btn-primary" onClick={props.routeToAddPage}>Add Customer</button>
      </div>
    </div>
  );
}

List.propTypes = {
  customers:PropTypes.array.isRequired,
  routeToAddPage:PropTypes.func.isRequired,
  routeToEditPage:PropTypes.func.isRequired,
  deleteCustomer:PropTypes.func.isRequired
}
