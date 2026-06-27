import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

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
              <img src="/images/carousel-img1.png" className="d-block w-100" alt="Slide 1" />
              <div className="carousel-caption custom-caption text-start">
                <h2 className="custom-caption-title">CURSOS LIBRES Y EXTENSIÓN</h2>
                <p className="custom-caption-subtitle">Ingrese aquí para mayor información</p>
                <a href="/cursos-libres" className="custom-caption-btn">
                  Nuestros cursos ...
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/carousel-img3.png" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption custom-caption text-start">
                <h2 className="custom-caption-title">CARRERAS</h2>
                <p className="custom-caption-subtitle">Conozca nuestra oferta académica 2025.</p>
                <a href="/cursos-libres" className="custom-caption-btn">
                  Ofertas ...
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img src="/images/carousel-img2.png" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption custom-caption text-start">
                <h2 className="custom-caption-title">ADMISIÓN</h2>
                <p className="custom-caption-subtitle">¡Descubre tu potencial, sé parte de la UTN!</p>
                <a href="/cursos-libres" className="custom-caption-btn">
                  Conoce más ...
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
              <div className="carousel-item">
              <img src="/images/carousel-img4.png" className="d-block w-100" alt="Slide 3" />
              <div className="carousel-caption custom-caption text-start">
                <h2 className="custom-caption-title">SOMOS U PÚBLICA</h2>
                <p className="custom-caption-subtitle">Transformando el futuro con educación de calidad: Costa Rica confía en la UPública</p>
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
          <h2 className="noticias-title">Noticias UTN</h2>
          <div className="noticias-grid">

            <div className="noticia-card noticia-noticias">
              <img
                src="https://www.utn.ac.cr/sites/default/files/2025-09/WhatsApp%20Image%202025-09-09%20at%2010.30.06%20AM.jpeg"
                alt="Noticias de UTN"
                className="noticia-bg-image"
              />
              <div className="noticia-overlay">
                <h3 className="noticia-card-title">Acción Universitaria</h3>
              </div>
            </div>

            <div className="noticia-card noticia-accion">
              <img
                src="https://www.utn.ac.cr/sites/default/files/2025-06/WhatsApp%20Image%202025-06-02%20at%205.40.21%20PM.jpeg"
                alt="Acción UTN"
                className="noticia-bg-image"
              />
               <div className="noticia-overlay">
              </div>
            </div>
            <div className="noticia-card noticia-prensa">
              <img
                src="https://www.utn.ac.cr/sites/default/files/2024-08/Sala-prensa.png"
                alt="Sala de prensa"
                className="noticia-bg-image"
              />
              <div className="noticia-overlay">
                <h3 className="noticia-card-title">Sala de Prensa</h3>
              </div>
            </div>

            <div className="noticia-card noticia-videos">
              <img
                src="https://www.utn.ac.cr/sites/default/files/2024-08/Videos-UTN.png"
                alt="Videos de la UTN"
                className="noticia-bg-image"
              />
              <div className="noticia-overlay">
                <h3 className="noticia-card-title">Videos UTN</h3>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
export default App;