import React from 'react';
import '../styles/utn-transparente.css';

const UtnTransparente: React.FC = () => {
  return (
    <div className="transparente-container">

      {/* Main Content */}
      <main className="main-content">
        {/* Transparency Section */}
        <div className="transparency-section">
          <div className="transparency-header">
            <h2>TRANSPARENT UTN</h2>
          </div>
          
          <div className="transparency-content">
            <p>La Universidad Técnica Nacional pone a disposición de la comunidad en general el micrositio web de Transparencia,que le permite tener conocimiento sobre la gestión que realiza esta casa de estudios.</p>
            
            <p>Dentro de los objetivos principales de este micrositio web, se encuentran:</p>
            
            <ul>
              <li>Accesar a la información pública</li>
              <li>Visibilizar la administración de los recursos públicos de forma transparente.</li>
              <li>Garantizar el derecho humano y constitucional de acceso a la información de esta Institución Pública.</li>
            </ul>
            
            <p>Para ingresar al mencionado sitio, puede dar click a la  imagen "Índice de Transparencia" o bien, al siguiente enlace: <a href="#" className="transparency-link">UTN TRANSPARENCY</a></p>
            
            <div className="transparency-images">
              <img src="https://www.utn.ac.cr/sites/default/files/images/I%CC%81ndice%20de%20transparencia.png" alt="Índice de transparencia" className="transparency-img" />
              <img src="https://www.utn.ac.cr/sites/default/files/inline-images/INFOGRAFI%CC%81A%20Transparencia%202-AGOSTO%2724.png" alt="Infografía Transparencia" className="transparency-img" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UtnTransparente;