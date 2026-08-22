import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SecondNavbar from '../components/second-navbar';

function renderNavbar() {
  return render(<SecondNavbar />, { wrapper: MemoryRouter });
}

describe('SecondNavbar', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the brand link with the non-scrolled logo', () => {
    renderNavbar();

    const logo = screen.getByAltText('Logo UTN') as HTMLImageElement;
    expect(logo.src).toContain('logo-utn2.png');
  });

  it('adds the "scroll" class and swaps the logo once scrolled past 50px', () => {
    renderNavbar();

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);

    const nav = document.querySelector('.second-navbar');
    expect(nav?.className).toContain('scroll');

    const logo = screen.getByAltText('Logo UTN') as HTMLImageElement;
    expect(logo.src).toContain('Utn-logoAzul.png');
  });

  it('removes the "scroll" class when scrolling back above the threshold', () => {
    renderNavbar();

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true });
    fireEvent.scroll(window);

    Object.defineProperty(window, 'scrollY', { value: 0, writable: true });
    fireEvent.scroll(window);

    const nav = document.querySelector('.second-navbar');
    expect(nav?.className).not.toContain('scroll');
  });

  it('opens a dropdown menu on click and closes it on a second click', () => {
    renderNavbar();

    const toggle = screen.getByText('Academia');
    const menu = toggle.nextElementSibling as HTMLElement;

    fireEvent.click(toggle);
    expect(menu.classList.contains('show')).toBe(true);

    fireEvent.click(toggle);
    expect(menu.classList.contains('show')).toBe(false);
  });

  it('closes a previously open dropdown when a different one is opened', () => {
    renderNavbar();

    const toggleAcerca = screen.getByText('Acerca de la UTN');
    const toggleAcademia = screen.getByText('Academia');

    const menuAcerca = toggleAcerca.nextElementSibling as HTMLElement;
    const menuAcademia = toggleAcademia.nextElementSibling as HTMLElement;

    fireEvent.click(toggleAcerca);
    expect(menuAcerca.classList.contains('show')).toBe(true);

    fireEvent.click(toggleAcademia);
    expect(menuAcademia.classList.contains('show')).toBe(true);
    expect(menuAcerca.classList.contains('show')).toBe(false);
  });

  it('closes an open dropdown when clicking outside of it', () => {
    renderNavbar();

    const toggle = screen.getByText('Academia');
    const menu = toggle.nextElementSibling as HTMLElement;

    fireEvent.click(toggle);
    expect(menu.classList.contains('show')).toBe(true);

    fireEvent.click(document.body);
    expect(menu.classList.contains('show')).toBe(false);
  });

  it('renders links to each main section', () => {
    renderNavbar();

    // "Inicio", "Internacional" y "Funcionarios UTN" son links simples,
    // sin texto repetido en ningún submenú: getByText alcanza.
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Internacional')).toBeInTheDocument();
    expect(screen.getByText('Funcionarios UTN')).toBeInTheDocument();

    // "Sedes", "Organización" y "Servicios Estudiantiles" son toggles de
    // dropdown (role="button" explícito en el JSX). "Sedes" en particular
    // también aparece como item dentro del submenú de "Organización"
    // (<Link to="/sede-guanacaste">Sedes</Link>), que es un role="link"
    // normal, no "button" - por eso hay que buscar por rol para
    // desambiguar en vez de por texto.
    expect(
      screen.getByRole('button', { name: 'Servicios Estudiantiles' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Sedes' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Organización' })
    ).toBeInTheDocument();
  });
});