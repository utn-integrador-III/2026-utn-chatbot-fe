import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/navbar';

function renderNavbar() {
  return render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>,
  );
}

describe('Navbar', () => {
  it('se renderiza sin errores', () => {
    renderNavbar();
  });

  it('muestra los links principales de navegación', () => {
    renderNavbar();
    expect(screen.getByText('Admisión')).toBeInTheDocument();
    expect(screen.getByText('Matrícula')).toBeInTheDocument();
    expect(screen.getByText('Calendarios')).toBeInTheDocument();
    expect(screen.getByText('Trámites Estudiantiles')).toBeInTheDocument();
  });

  it('el link de UTN Transparente apunta a la ruta correcta', () => {
    renderNavbar();
    const link = screen.getByText('UTN Transparente').closest('a');
    expect(link).toHaveAttribute('href', '/utn-transparente');
 });

  it('el link de Correo Estudiantil abre en una pestaña nueva', () => {
    renderNavbar();
    const link = screen.getByText('Correo Estudiantil').closest('a');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('el link de UTN Transparente apunta a la ruta correcta', () => {
    renderNavbar();
    const link = screen.getByText('UTN Transparente').closest('a');
    expect(link).toHaveAttribute('href', '/utn-transparente');
  });

  it('muestra los íconos de redes sociales', () => {
    const { container } = renderNavbar();
    const socialIcons = container.querySelectorAll('.social-icon');
    expect(socialIcons.length).toBe(5);
  });

  it('muestra las banderas de idioma', () => {
    renderNavbar();
    expect(screen.getByAltText('Bandera España')).toBeInTheDocument();
    expect(screen.getByAltText('Bandera Reino Unido')).toBeInTheDocument();
  });
});