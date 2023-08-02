import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { logout } from '../../store/session';
import { useDispatch } from 'react-redux';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <ul className="navbar-list">
      <li>
        <NavLink className="navbar-link" exact to="/">
          Home
        </NavLink>
      </li>
      {isLoaded && (
        <div>
          <ProfileButton user={sessionUser} />
        </div>
      )}
      {sessionUser && (
        <div>
          <button onClick={handleLogout}>Log out</button>
        </div>
      )}
      <li>
        <NavLink className="navbar-link" exact to="/">
          Home
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
