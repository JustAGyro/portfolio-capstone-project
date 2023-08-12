import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import { signUp } from '../../store/session';
import './SignupForm.css';

function SignupFormModal() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();
  const [usernameError, setUsernameError] = useState(false);
  const [emailLengthError, setEmailLengthError] = useState(false);
  const [emailTypeError, setEmailTypeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (username.length > 20) {
      setUsernameError(true);
    } else if (username.length <= 20) {
      setUsernameError(false);
    }
  }, [username]);

  useEffect(() => {
    if (email.length > 25) {
      setEmailLengthError(true);
    } else if (email.length <= 25) {
      setEmailLengthError(false);
    }

    if (email.length > 0) {
      const pattern = /@.+[.].+/;
      setEmailTypeError(!pattern.test(email));
    }
  }, [email]);

  useEffect(() => {
    if (password.length < 1 || password.length > 25) {
      setPasswordError(true);
    } else if (password.length >= 1 && password.length <= 25) {
      setPasswordError(false);
    }
  }, [password]);

  useEffect(() => {
    if (usernameError || emailLengthError || passwordError || emailTypeError) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [usernameError, emailLengthError, emailTypeError, passwordError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data);
      } else {
        closeModal();
      }
    } else {
      setErrors([
        'Confirm Password field must be the same as the Password field',
      ]);
    }
  };

  return (
    <>
      <div className="signup-div">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <p>Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailLengthError && (
            <p className="error-msg">
              Email must be less than 25 characters in length
            </p>
          )}
          {emailTypeError && (
            <p className="error-msg">
              Email must be in a valid email format E.g: blank@blank.blank
            </p>
          )}
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          {usernameError && (
            <p className="error-msg">
              Username must be less than 20 characters in length
            </p>
          )}
          <p>Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {passwordError && (
            <p className="error-msg">
              Password length must be between 1-25 characters.
            </p>
          )}
          <p>Confirm Password</p>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button disabled={disabled} className="gen-button" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default SignupFormModal;
