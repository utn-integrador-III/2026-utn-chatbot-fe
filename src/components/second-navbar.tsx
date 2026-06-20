import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../styles/second-navbar.css";

function SecondNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    // Detectar scroll para cambiar el color del navbar
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // umbral: a partir de 50px baja el cambio de color
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark second-navbar ${isScrolled ? "scroll" : ""}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="images/logo-utn2.png" alt="Logo UTN" />
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
               <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  Acerca de la UTN
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sede-central">De un vistazo</Link></li>
                  <li><Link className="dropdown-item" to="/sede-san-carlos">Reseñas de la UTN</Link></li>
                  <li><Link className="dropdown-item" to="/sede-pacifico">Marco Estratégico</Link></li>
                  <li><Link className="dropdown-item" to="/sede-atenas">Autoridades</Link></li>
                  <li><Link className="dropdown-item" to="/sede-guanacaste">Interpretación en LESCO para actividades institucionales</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Preguntas Frecuentes</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Mapas y Direcciones</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Nomativas</Link></li>
                </ul>
              </li>
                   <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  Academia
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sede-central">Modelo educativo</Link></li>
                  <li><Link className="dropdown-item" to="/sede-san-carlos">Carreras</Link></li>
                  <li><Link className="dropdown-item" to="/sede-pacifico">Docencia</Link></li>
                  <li><Link className="dropdown-item" to="/sede-atenas">Extensión y Acción Social</Link></li>
                  <li><Link className="dropdown-item" to="/sede-guanacaste">Investigación y Transparencia</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  Servicios Estudiantiles
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sede-central">Becas y Beneficios Estudiantiles</Link></li>
                  <li><Link className="dropdown-item" to="/sede-san-carlos">Biestar Estudiantil</Link></li>
                  <li><Link className="dropdown-item" to="/sede-pacifico">Tutorías Estudiantiles</Link></li>
                  <li><Link className="dropdown-item" to="/sede-atenas">Costos de Servicios y Cuentas Bancarias</Link></li>
                  <li><Link className="dropdown-item" to="/sede-guanacaste">Cultura, Deporte y Recreación</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Normativa Estudiantil</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Registro Universitario</Link></li>
                </ul>
              </li>
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
               <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  style={{ cursor: 'pointer' }}
                >
                  Organización
                </a>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="/sede-central">Consejo Universitario</Link></li>
                  <li><Link className="dropdown-item" to="/sede-san-carlos">Rectoría</Link></li>
                  <li><Link className="dropdown-item" to="/sede-pacifico">Auditoría</Link></li>
                  <li><Link className="dropdown-item" to="/sede-atenas">Vicerrectoría</Link></li>
                  <li><Link className="dropdown-item" to="/sede-guanacaste">Sedes</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Direcciones</Link></li>
                  <li><Link className="dropdown-item" to="/centro-formacion">Centros y Programas</Link></li>
                </ul>
              </li>
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