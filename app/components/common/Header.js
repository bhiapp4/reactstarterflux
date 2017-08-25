import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';

export default class Header extends Component{
  render (){
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <NavLink to="/" className="navbar-brand">
              React Flux Starter App
            </NavLink>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <NavItem path="/" label="Home"/>
              <NavItem path="/customers" label="Customers"/>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}
