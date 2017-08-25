import React, { PropTypes } from 'react';

export default function Form(props){
    return(
      <div>
        <h1>Add/Edit Customer</h1>
        <form>
          <div className="form-group">
            <label htmlFor="id">ID</label>
            <input className="form-control" name="id" onChange={props.handleInputChange} value={props.customer.id}/>
          </div>
          <div className="form-group">
            <label htmlFor="id">First Name</label>
            <input className="form-control" name="fName" onChange={props.handleInputChange} value={props.customer.fName}/>
          </div>
          <div className="form-group">
            <label htmlFor="id">Last Name</label>
            <input className="form-control" name="lName" onChange={props.handleInputChange} value={props.customer.lName}/>
          </div>
          <input type="button" value="Submit" className="btn btn-primary" onClick={props.handleFormSubmit}/>
        </form>
      </div>
    );
}

Form.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  customer: PropTypes.object.isRequired,
  handleFormSubmit: PropTypes.func.isRequired
}
