import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Academia from '../pages/academia';
import Admision from '../pages/admision';
import Avatar from '../pages/avatar';
import Campus from '../pages/campus';
import Funcionarios from '../pages/funcionarios';
import Internacional from '../pages/internacional';
import Organizacion from '../pages/Organizacion';
import Sedes from '../pages/sedes';
import Servicios from '../pages/servicios';
import Tramites from '../pages/tramites';
import acercade from '../pages/acercade';
import utntransparente from '../pages/utn-transparente';

const staticPages: [string, React.ComponentType][] = [
  ['Academia', Academia],
  ['Admisión', Admision],
  ['Avatar', Avatar],
  ['Campus', Campus],
  ['Funcionarios', Funcionarios],
  ['Internacional', Internacional],
  ['Organización', Organizacion],
  ['Sedes', Sedes],
  ['Servicios', Servicios],
  ['Trámites', Tramites],
  ['Acerca de', acercade],
  ['UTN Transparente', utntransparente],
];

describe('Páginas estáticas institucionales', () => {
  it.each(staticPages)('%s se renderiza sin errores', (_name, Page) => {
    render(
      <MemoryRouter>
        <Page />
      </MemoryRouter>,
    );
  });
});