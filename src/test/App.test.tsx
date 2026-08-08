import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App (Página de inicio)', () => {
  it('se renderiza sin errores', () => {
    render(<App />);
  });

  it('muestra los 4 slides del carrusel', () => {
    render(<App />);
    expect(screen.getByText('CURSOS LIBRES Y EXTENSIÓN')).toBeInTheDocument();
    expect(screen.getByText('CARRERAS')).toBeInTheDocument();
    expect(screen.getByText('ADMISIÓN')).toBeInTheDocument();
    expect(screen.getByText('SOMOS U PÚBLICA')).toBeInTheDocument();
  });

  it('muestra el título de la sección de noticias', () => {
    render(<App />);
    expect(screen.getByText('Noticias UTN')).toBeInTheDocument();
  });

  it('muestra las 4 tarjetas de noticias', () => {
    render(<App />);
    expect(screen.getByText('Acción Universitaria')).toBeInTheDocument();
    expect(screen.getByText('Sala de Prensa')).toBeInTheDocument();
    expect(screen.getByText('Videos UTN')).toBeInTheDocument();
  });

  it('los botones de navegación del carrusel están presentes', () => {
    render(<App />);
    expect(screen.getByText('Anterior')).toBeInTheDocument();
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
  });
});