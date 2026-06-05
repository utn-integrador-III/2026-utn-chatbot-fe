import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
  const footerItems = [
    { label: "Centros y Programas", icon: "🌐", to: "/centros-y-programas" },
    { label: "Contratación Administrativa", icon: "💼", to: "/contratacion-administrativa" },
    { label: "Campus Virtual", icon: "🏛️", to: "/campus" },
    { label: "Enlaces de interés", icon: "🔗" },
    { label: "Tribunal Electoral", icon: "🗳️" },
    { label: "Publicaciones", icon: "📄" },
    { label: "Directorio institucional", icon: "📞" },
    { label: "Repositorio institucional", icon: "📍" },
    { label: "Mapa del Sitio", icon: "🗺️" },
    { label: "SIE", icon: "👥" },
  ];
    return (
    <>
     {/* FOOTER */}
      <footer className="footer-container">
        <div className="footer-icons">
          {footerItems.map((item, index) => (
            <div key={index} className="footer-icon-item">
              <div className="footer-icon">{item.icon}</div>
              {item.to ? (
                <Link to={item.to} className="footer-icon-link">
                  <span className="footer-icon-label">{item.label}</span>
                </Link>
              ) : (
                <span className="footer-icon-label">{item.label}</span>
              )}
            </div>
          ))}
        </div>
        <div className="footer-nav-links">
          <a href="#" className="footer-nav-link">Términos y condiciones</a>
          <a href="#" className="footer-nav-link">Contacto</a>
          <a href="#" className="footer-nav-link">UTN Cuadro de calificación del sitio</a>
        </div>
        <div className="footer-search-section">
          <div className="footer-search">
            <input type="text" placeholder="Buscar" className="footer-search-input" />
            <button className="footer-search-button">Buscar</button>
          </div>
        </div>
        <div className="footer-license">
          <p className="footer-license-text">
            <strong>Reconocimiento CC BY :</strong> Esta licencia permite a los reutilizadores: copiar, distribuir, remezclar, adaptar y desarrollar el original, en cualquier medio o formato, siempre que se dé crédito al creador.
          </p>
          <p className="footer-license-text">
            La licencia incluso permite el uso comercial, pero se debe dar crédito al creador.
          </p>
          <div className="footer-cc-info">
            <img src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" alt="Creative Commons License" className="footer-cc-image" />
            <span className="footer-cc-text">Esta obra está bajo una Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</span>
          </div>
        </div>
        <div className="footer-copyright">
          <p>© 2025 UTN. Todos los derechos reservados. Este sitio web se actualiza diariamente.</p>
          <p>Proyecto Integrador Pukeyackos</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;