import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NotFound(){
  return (
    <div>
      <h1>Not Found </h1>
      <div>
        <NavLink to="/" className="navbar-brand">
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}
