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
    <div className="navbar-list">
      {sessionUser && (
        <div>
          <div className="navbar-item">
            <NavLink className="navbar-link" exact to="/">
              Home
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink className="navbar-link" exact to="/teams">
              My Teams
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink className="navbar-link" exact to="/pokemon">
              My Pokemon
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink className="navbar-link" exact to="/pokemon/create">
              Create Pokemon
            </NavLink>
          </div>
          <div className="navbar-item">
            <NavLink className="navbar-link" exact to="/teams/create">
              Create Team
            </NavLink>
          </div>
        </div>
      )}
      {sessionUser && (
        <div className="nav-button-div">
          <button className="nav-button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </div>
  );
}

export default Navigation;
