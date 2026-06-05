import React, { useState } from 'react';

//IMPORTACIONES DEL CSS
import '../styles/campus.css';

const Campus: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('English (en)');

  const handleLogin = () => {
    console.log('Login clicked with:', { username, password });
  };

  const handleGuestAccess = () => {
    console.log('Guest access clicked');
  };

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
  };

  const handleCookiesNotice = () => {
    console.log('Cookies notice clicked');
  };

  return (
    <div className="campus-container">
      <div className="login-box">
        {/* Logo y título */}
        <div className="logo-section">
          <img src="public\images\logoutn-campus.png" alt="" />
        </div>

        {/* Formulario de login */}
        <div className="form-section">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-input"
            placeholder="Username"
          />
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            placeholder="Password"
          />

          <button
            type="button"
            onClick={handleLogin}
            className="login-btn"
          >
            Log in
          </button>
        </div>

        {/* Link de contraseña olvidada */}
        <div className="forgot-password">
          <a href="#" onClick={(e) => { e.preventDefault(); handleForgotPassword(); }}>
            Lost password?
          </a>
        </div>

        {/* Sección de acceso como invitado */}
        <div className="guest-section">
          <h2 className="guest-title">
            Some courses may allow guest access
          </h2>
          <button
            type="button"
            onClick={handleGuestAccess}
            className="guest-btn"
          >
            Access as a guest
          </button>
        </div>

        {/* Footer con idioma y cookies */}
        <div className="footer-section">
          <div className="language-selector">
            <select 
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="language-select"
            >
              <option value="English (en)">English (en)</option>
              <option value="Español (es)">Español (es)</option>
            </select>
            <span className="dropdown-arrow">▼</span>
          </div>
          
          <button
            type="button" 
            onClick={handleCookiesNotice}
            className="cookies-btn"
          >
            Cookies notice
          </button>
        </div>
      </div>
    </div>
  );
};

export default Campus;