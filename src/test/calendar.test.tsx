import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import CalendarsSection from '../pages/calendar';

describe('CalendarsSection', () => {
  beforeEach(() => {
    vi.stubGlobal('location', { ...window.location, href: '' });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
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
    expect(screen.getByText(/Calendario Institucional 2026$/)).toBeInTheDocument();
    expect(screen.getByText(/Por Procesos/)).toBeInTheDocument();
    expect(screen.getByText(/Extensión y Acción Social/)).toBeInTheDocument();
  });

  it('redirige a la URL correcta al hacer clic en un calendario', () => {
    render(<CalendarsSection />);
    const link = screen.getByText(/Por Procesos/);
    link.click();
    expect(window.location.href).toContain('Calendario%20Institucional%202026%20Por%20Procesos');
  });

  it('redirige a la URL correcta del calendario de Extensión', () => {
    render(<CalendarsSection />);
    const link = screen.getByText(/Extensión y Acción Social/);
    link.click();
    expect(window.location.href).toContain('Calendario%20Institucional%202026%20Extension');
  });
});