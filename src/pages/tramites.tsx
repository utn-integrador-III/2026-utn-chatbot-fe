import React from 'react';
import '../styles/tramites.css';

const Tramites: React.FC = () => {
  return (
    <div className="tramites-container">
      {/* Header */}

      {/* Main Content */}
      <main className="main-content">
        <div className="content-wrapper">
          {/* Left Section */}
          <div className="left-section">
            <div className="procedures-header">
              <h1>Trámites Estudiantiles</h1>
            </div>
            
            <div className="procedures-list">
              <div className="procedure-item">
                <span>Registro Universitario</span>
              </div>
              <div className="procedure-item">
                <span>Becas</span>
              </div>
              <div className="procedure-item">
                <span>Prorrogas de Pago</span>
              </div>
              <div className="procedure-item">
                <span>Credito Estudiantil por trámite de beca socioeconómica para el primer cuatrimestre 2023</span>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <div className="management-system">
              <span>Sistema de Información de Gestión Universitaria</span>
            </div>
            
            <div className="avatar-section">
              <div className="avatar-circle">
                <span>AVATAR</span>
              </div>
              <div className="avatar-label">
                <span>AVATAR</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tramites;