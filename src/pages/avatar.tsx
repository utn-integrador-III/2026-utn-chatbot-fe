import React, { useState } from 'react';
import '../styles/avatar.css';

const AvatarLogin: React.FC = () => {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = () => {
    console.log('Login clicked with:', { usuario, contrasena });
  };

  const handleForgotPassword = () => {
    console.log('Olvidó Contraseña clicked');
  };

  const handleActivateAccount = () => {
    console.log('Activar Cuenta clicked');
  };

  const handleFrequentQuestions = () => {
    console.log('Preguntas Frecuentes clicked');
  };

  const handlePrivacidad = () => {
    console.log('Privacidad clicked');
  };

  const handleUso = () => {
    console.log('Uso clicked');
  };

  const handleSoporte = () => {
    console.log('Soporte clicked');
  };

  return (
    <div className="avatar-container">
      <div className="avatar-login-box">
        {/* Header con avatar.sys */}
        <div className="avatar-header">
          <div className="avatar-icon">👤</div>
          avatar.sys
        </div>

        {/* Contenido principal */}
        <div className="login-content">
          {/* Logo UTN */}
          <div className="utn-logo-section">
            <div className="utn-logo-avatar">
              <div className="utn-main-avatar">
                <div className="utn-box-avatar"><img src="public/images/logo-utn.png" alt="" /></div>
                <div className="utn-dots-avatar">••</div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="form-group">
            <div className="input-with-icon">
              <div className="input-icon user-icon"></div>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                className="form-input-avatar"
                placeholder="Usuario"
              />
            </div>
          </div>

          <div className="form-group">
            <div className="input-with-icon">
              <div className="input-icon lock-icon"></div>
              <input
                type="password"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
                className="form-input-avatar"
                placeholder="Contraseña"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={handleLogin}
            className="login-btn-avatar"
          >
            Ingresar
          </button>
        </div>

        {/* Opciones */}
        <div className="options-section">
          <div className="option-item" onClick={handleForgotPassword}>
            <div className="option-icon forgot-icon"></div>
            <div className="option-text">Olvidó Contraseña</div>
          </div>
          
          <div className="option-item" onClick={handleActivateAccount}>
            <div className="option-icon activate-icon"></div>
            <div className="option-text">Activar Cuenta</div>
          </div>
          
          <div className="option-item" onClick={handleFrequentQuestions}>
            <div className="option-icon help-icon"></div>
            <div className="option-text">Preguntas Frecuentes</div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer-avatar">
          <div className="footer-left">
            <div className="footer-company">© AKTEK S.A.</div>
            <div className="footer-rights">Todos los Derechos Reservados</div>
          </div>
          <div className="footer-links">
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handlePrivacidad(); }}>
              Privacidad
            </a>
            <span>|</span>
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handleUso(); }}>
              Uso
            </a>
            <span>|</span>
            <a href="#" className="footer-link" onClick={(e) => { e.preventDefault(); handleSoporte(); }}>
              Soporte
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvatarLogin;