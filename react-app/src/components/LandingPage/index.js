import React from 'react';
import './LandingPage.css';
import OpenModalButton from '../OpenModalButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';

function LandingPage() {
  return (
    <div className="landingpage-container">
      <div className="landing-left">
        <div className="landing-header">
          <h1>Welcome to PokeMeta</h1>
        </div>
        <div className="landing-buttons">
          <button className="gen-button">
            {' '}
            <OpenModalButton
              className="gen-btn"
              buttonText="Log In"
              modalComponent={<LoginFormModal />}
            />
          </button>
          <button className="gen-button">
            {' '}
            <OpenModalButton
              className="gen-btn"
              buttonText="Sign Up"
              modalComponent={<SignupFormModal />}
            />
          </button>
        </div>
      </div>
      <div className="landing-right">
        <img
          className="landing-img"
          src="https://i.ibb.co/5Y0PJnL/1261047.jpg"
          alt="1261047"
          border="0"
        ></img>
      </div>
    </div>
  );
}

export default LandingPage;
