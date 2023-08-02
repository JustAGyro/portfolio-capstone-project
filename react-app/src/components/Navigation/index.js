import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  return (
    <ul className="navbar-list">
      <li>
        <NavLink className="navbar-link" exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="navbar-link" exact to="/">
          Home
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
