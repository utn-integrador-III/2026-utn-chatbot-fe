import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav top-links">
                <li className="nav-item"><Link to="/admision" className="nav-link">Admisión</Link></li>
                <li className="nav-item"><Link to="/avatar" className="nav-link">Matrícula</Link></li>
                <li className="nav-item"><Link to="/calendar" className="nav-link">Calendarios</Link></li>
                <li className="nav-item"><Link to="/tramites" className="nav-link">Trámites Estudiantiles</Link></li>
                <li className="nav-item">
                  <a
                    href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?scope=service%3A%3Aaccount.microsoft.com%3A%3AMBI_SSL%20openid%20profile%20offline_access&response_type=code&client_id=81feaced-5ddd-41e7-8bef-3e20a2689bb7&redirect_uri=https%3A%2F%2Faccount.microsoft.com%2Fauth%2Fcomplete-signin-oauth&client-request-id=cb25cba1-937b-473f-aeb9-836830537e71&x-client-SKU=MSAL.Desktop&x-client-Ver=4.66.1.0&x-client-OS=Windows%20Server%202019%20Datacenter&prompt=login&client_info=1&state=H4sIAAAAAAAEAAXBzWKCIAAA4HfZlYMYqO1Y4m8pIuHSW5KaNmypo9nT7_s--rMeWXj_ZEYYPUvETfuZ8fJCi0jfrLsIhiZatnreilsn8R6osEd5ENSlH7cJzsUvtCI7Hj0_JOQ3MARBARhHYL6-T54MgmvNzvGqabTQ29tK17JdeX4SHCRt5nTsIrWL5HpI95YTZq_WeC6ceUwVJWndPjdnpOGnGPUO_7HK3bxdvIJjkszs6wvRY-HRvtjNmSO5wS3nmhYxGazuGhHim0QZtkztSsxU3ZwHPRqRNmn1aFJabsHhMtwB258UGia41WxC2snkzKfZjxdlyqBi3WUSU_3toeKgKyUNkA81PIMWujEWZw0r_ILd2MFspfbVR8_GbGa1y727mXigyhLxg3u96WLZVVGjsH9QizvwqM5jqAjGj2kdHZRtPv4BkHfzYIIBAAA&msaoauth2=true&instance_aware=true&lc=1033&ru=https%3A%2F%2Faccount.microsoft.com%2Faccount"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Correo Estudiantil
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.utn.ac.cr/bibliotecas"
                    className="nav-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Bibliotecas
                  </a>
                </li>
                <li className="nav-item"><Link to="utn-transparente" className="nav-link">UTN Transparente</Link></li>
              </ul>
          </div>
        </div>
      </nav>

      {/* Fila aparte: iconos sociales + banderas, totalmente fuera del collapse */}
      <div className="social-row-wrapper">
        <div className="d-flex align-items-center social-row">
          <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-twitter-x"></i></a>
          <img src="https://flagcdn.com/w20/es.png" alt="Bandera España" className="flag-icon" />
          <img src="https://flagcdn.com/w20/gb.png" alt="Bandera Reino Unido" className="flag-icon" />
        </div>
      </div>
    </>
  );
}

export default Navbar;