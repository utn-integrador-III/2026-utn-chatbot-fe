import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// CSS
import './styles/index.css';

// Componentes / Páginas
import App from './App';
import Campus from './pages/campus';
import Admision from './pages/admision';
import AvatarLogin from './pages/avatar';
import Acercade from './pages/acercade';
import Academia from './pages/academia';
import CalendarsSection from './pages/calendar';
import Servicios from './pages/servicios';
import Sedes from './pages/sedes';
import Organizacion from './pages/Organizacion';
import Internacional from './pages/internacional';
import Funcionarios from './pages/funcionarios';
import Tramites from './pages/tramites';
import UtnTransparente from './pages/utn-transparente';

import MainLayout from './layouts/mainLayout';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>

      {/* Rutas con navbar, chat y footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<App />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/admision" element={<Admision />} />
        <Route path="/avatar" element={<AvatarLogin />} />
        <Route path="/acercade" element={<Acercade />} />
        <Route path="/academia" element={<Academia />} />
        <Route path="/calendar" element={<CalendarsSection />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/sedes" element={<Sedes />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/internacional" element={<Internacional />} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/utn-transparente" element={<UtnTransparente />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default null;
