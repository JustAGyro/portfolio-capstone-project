import React from 'react';
import './LandingPage.css';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function LandingPage() {
  return (
    <div className="homepage-container">
      <div className="header-hp">
        <h1>Welcome to Robinhood</h1>
      </div>
      <div className="hp-buttons">
        <button className="sd-button">
          {' '}
          <OpenModalButton
            className="hp-btn"
            buttonText="Log In"
            modalComponent={<LoginFormModal />}
          />
        </button>
        <button className="sd-button">
          {' '}
          <OpenModalButton
            className="hp-btn"
            buttonText="Sign Up"
            modalComponent={<SignupFormModal />}
          />
        </button>
      </div>
    </div>
  );
}

export default LandingPage;
