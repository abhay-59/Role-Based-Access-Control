// src/components/Welcome.js
import React from 'react';
import './styles.css';

const Welcome = ({ setView }) => (
  <div className="auth-container">
  <h2 className="auth-title">Hello User!</h2>
  <div className="auth-buttons">
    <button
      onClick={() => setView('login')}
      className="auth-button login-button"
    >
      Login
    </button>
    <button
      onClick={() => setView('signup')}
      className="auth-button signup-button"
    >
      Signup
    </button>
  </div>
</div>

);

export default Welcome;
