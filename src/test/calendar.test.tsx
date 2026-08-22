import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CalendarsSection from '../pages/calendar';

describe('CalendarsSection', () => {
  beforeEach(() => {
    vi.stubGlobal('location', { ...window.location, href: '' });
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    vi.restoreAllMocks();
  });

  it('se renderiza sin errores', () => {
    render(<CalendarsSection />);
  });

  it('muestra el banner de "Calendarios Institucionales"', () => {
    render(<CalendarsSection />);
    expect(screen.getByText('Calendarios Institucionales')).toBeInTheDocument();
  });

  it('muestra los 3 enlaces de calendarios', () => {
    render(<CalendarsSection />);

    // Son <button>, no links: usamos getByRole para que quede claro
    // qué elemento es y evitar depender de coincidencias de texto parcial.
    expect(
      screen.getByRole('button', { name: /Calendario Institucional 2026$/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Por Procesos/ })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Extensión y Acción Social/ })
    ).toBeInTheDocument();
  });

  it('redirige a la URL correcta al hacer clic en el calendario institucional', () => {
    render(<CalendarsSection />);

    const boton = screen.getByRole('button', {
      name: /Calendario Institucional 2026$/
    });
    boton.click();

    expect(window.location.href).toContain(
      'Calendario%20Institucional%202026%20V.3'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Clicked on: Calendario Institucional 2026'
    );
  });

  it('redirige a la URL correcta al hacer clic en "Por Procesos"', () => {
    render(<CalendarsSection />);

    const boton = screen.getByRole('button', { name: /Por Procesos/ });
    boton.click();

    expect(window.location.href).toContain(
      'Calendario%20Institucional%202026%20Por%20Procesos'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Clicked on: Calendario Institucional 2026 Por Procesos'
    );
  });

  it('redirige a la URL correcta del calendario de Extensión', () => {
    render(<CalendarsSection />);

    const boton = screen.getByRole('button', {
      name: /Extensión y Acción Social/
    });
    boton.click();

    expect(window.location.href).toContain(
      'Calendario%20Institucional%202026%20Extension'
    );
    expect(console.log).toHaveBeenCalledWith(
      'Clicked on: Calendario de Extensión y Acción Social'
    );
  });
});