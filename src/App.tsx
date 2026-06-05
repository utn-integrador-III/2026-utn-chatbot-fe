//IMPORTACIONES DEL ROUTER DOM
//import { Link } from "react-router-dom";

//IMPORTACIONES DE BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

//IMPORTACIONES DE CSS
import "./styles/carousel.css";
import "./styles/noticias.css";

const App = () => {
  return (
    <>
      {/* CARRUSEL */}
      <div className="carousel-container">
        <hr />
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://www.utn.ac.cr/sites/default/files/Carreras_0.png" className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Conozca nuestra oferta académica 2025.</h5>
                <p>Carreras</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.utn.ac.cr/sites/default/files/Admision_0.png" className="d-block w-100" alt="Slide 2" />
              <div className="carousel-caption d-none d-md-block">
                <h5>¡Descubre tu potencial, sé parte de la UTN!</h5>
                <p>Admisión</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.utn.ac.cr/sites/default/files/Identidad_0.png" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Transformamos el futuro con educación de calidad.</h5>
                <p>Somos Universidad pública.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Anterior</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Siguiente</span>
          </button>
        </div>
      </div>

      {/* SECCIÓN DE NOTICIAS */}
      <section className="noticias-section">
        <div className="noticias-container">
          <h2 className="noticias-title">Noticias de UTN</h2>
          <div className="noticias-grid">
            <div className="noticia-card noticia-noticias">
              <img src="https://www.utn.ac.cr/sites/default/files/2024-08/Noticias-UTN.png" alt="Noticias de UTN" className="noticia-bg-image" />
              <div className="noticia-overlay"><h3 className="noticia-card-title">Noticias de UTN</h3></div>
            </div>
            <div className="noticia-card noticia-accion">
              <img src="https://www.utn.ac.cr/sites/default/files/2025-06/WhatsApp%20Image%202025-06-02%20at%205.40.21%20PM.jpeg" alt="Acción UTN" className="noticia-bg-image" />
              <div className="accion-logo">
                <div className="informativo-badge">Informativo</div>
                <div className="accion-text">
                  <span className="accion-word">Acción</span>
                  <span className="utn-word">UTN</span>
                </div>
              </div>
            </div>
            <div className="noticia-card noticia-prensa">
              <img src="https://www.utn.ac.cr/sites/default/files/2024-08/Sala-prensa.png" alt="Sala de prensa" className="noticia-bg-image" />
              <div className="noticia-overlay"><h3 className="noticia-card-title">Sala de prensa</h3></div>
            </div>
            <div className="noticia-card noticia-videos">
              <img src="https://www.utn.ac.cr/sites/default/files/2024-08/Videos-UTN.png" alt="Videos de la UTN" className="noticia-bg-image" />
              <div className="noticia-overlay"><h3 className="noticia-card-title">Videos de la UTN</h3></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default App;
