import React,{ Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavItem extends Component{

  render (){
    const isActive = this.context.router.history.location.pathname === this.props.path;
    return (
      <li className={isActive ? 'active':''}>
        <NavLink to={this.props.path}>
          {this.props.label}
        </NavLink>
      </li>
    );
  }
}

NavItem.contextTypes = {
  router: React.PropTypes.object
}
