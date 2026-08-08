import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SecondNavbar from '../components/second-navbar';

function renderSecondNavbar() {
  return render(
    <MemoryRouter>
      <SecondNavbar />
    </MemoryRouter>,
  );
}

describe('SecondNavbar', () => {
  it('se renderiza sin errores', () => {
    renderSecondNavbar();
  });

  it('no tiene la clase "scroll" antes de hacer scroll', () => {
    const { container } = renderSecondNavbar();
    const nav = container.querySelector('.second-navbar');
    expect(nav).not.toHaveClass('scroll');
  });

  it('agrega la clase "scroll" al hacer scroll más de 50px', () => {
    const { container } = renderSecondNavbar();
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);
    const nav = container.querySelector('.second-navbar');
    expect(nav).toHaveClass('scroll');
  });

  it('muestra los menús principales (Inicio, Academia, Sedes)', () => {
  renderSecondNavbar();
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Academia')).toBeInTheDocument();
    expect(screen.getAllByText('Sedes').length).toBeGreaterThan(0);
});

  it('muestra el link de Internacional apuntando a /internacional', () => {
    renderSecondNavbar();
    const link = screen.getByText('Internacional').closest('a');
    expect(link).toHaveAttribute('href', '/internacional');
  });
});