import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../components/footer';

function renderFooter() {
  return render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>,
  );
}

describe('Footer', () => {
  it('se renderiza sin errores', () => {
    renderFooter();
  });

  it('muestra el texto de copyright con el año correcto', () => {
    renderFooter();
    expect(screen.getByText(/© 2026 UTN/i)).toBeInTheDocument();
  });

  it('muestra los íconos principales del footer', () => {
    renderFooter();
    expect(screen.getByText('Centros y Programas')).toBeInTheDocument();
    expect(screen.getByText('Campus Virtual')).toBeInTheDocument();
    expect(screen.getByText('SIE')).toBeInTheDocument();
  });

  it('el buscador tiene el placeholder correcto', () => {
    renderFooter();
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
  });

  it('el link a "Campus Virtual" apunta a la ruta correcta', () => {
    renderFooter();
    const link = screen.getByText('Campus Virtual').closest('a');
    expect(link).toHaveAttribute('href', '/campus');
  });

  it('muestra la licencia Creative Commons', () => {
    renderFooter();
    expect(screen.getByAltText('Creative Commons License')).toBeInTheDocument();
  });
});