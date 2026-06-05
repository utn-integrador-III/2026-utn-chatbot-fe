import { Link } from "react-router-dom";
import { useEffect } from "react";
import "../styles/second-navbar.css";

function SecondNavbar() {
  useEffect(() => {
    // Inicializar dropdowns de Bootstrap cuando el componente se monta
    const dropdowns = document.querySelectorAll('.dropdown-toggle');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', (e) => {
        e.preventDefault();
        const menu = (e.currentTarget as Element).nextElementSibling as HTMLElement;
        const isOpen = menu.classList.contains('show');
        
        // Cerrar todos los dropdowns
        document.querySelectorAll('.dropdown-menu').forEach(m => m.classList.remove('show'));
        
        // Abrir o cerrar el dropdown actual
        if (!isOpen) {
          menu.classList.add('show');
        }
      });
    });

    // Cerrar dropdown al hacer click fuera
    document.addEventListener('click', (e) => {
      if (e.target && !(e.target as Element).matches('.dropdown-toggle')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.classList.remove('show');
        });
      }
    });
  }, []);

  return (
    <>
      {/* Botón para abrir/cerrar chat */}
     <nav className="navbar navbar-expand-lg navbar-dark second-navbar">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <img src="images/logo-utn.png" alt="Logo UTN" width="50" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav m-auto">
                <li className="nav-item"><Link to="/" className="nav-link">Inicio</Link></li>
                <li className="nav-item"><Link to="/acercade" className="nav-link">Acerca de la UTN</Link></li>
                <li className="nav-item"><Link to="/academia" className="nav-link">Academia</Link></li>
                <li className="nav-item"><Link to="/servicios" className="nav-link">Servicios Estudiantiles</Link></li>
                <li className="nav-item dropdown">
                  <a 
                    className="nav-link dropdown-toggle" 
                    href="#" 
                    role="button"
                    style={{ cursor: 'pointer' }}
                  >
                    Sedes
                  </a>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/sede-central">Sede Central</Link></li>
                    <li><Link className="dropdown-item" to="/sede-san-carlos">Sede de San Carlos</Link></li>
                    <li><Link className="dropdown-item" to="/sede-pacifico">Sede del Pacífico</Link></li>
                    <li><Link className="dropdown-item" to="/sede-atenas">Sede de Atenas</Link></li>
                    <li><Link className="dropdown-item" to="/sede-guanacaste">Sede de Guanacaste</Link></li>
                    <li><Link className="dropdown-item" to="/centro-formacion">Centro de Formación Pedagógica y Tecnología Educativa</Link></li>
                  </ul>
                </li>
                <li className="nav-item"><Link to="/organizacion" className="nav-link">Organización</Link></li>
                <li className="nav-item"><Link to="/internacional" className="nav-link">Internacional</Link></li>
                <li className="nav-item"><Link to="/funcionarios" className="nav-link">Funcionarios UTN</Link></li>
              </ul>
            </div>
          </div>
        </nav>
    </>
  );
}
export default SecondNavbar;