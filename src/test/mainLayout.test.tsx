import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/mainLayout';

function renderMainLayout() {
  const router = createMemoryRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: [{ index: true, element: <div>Contenido de la página</div> }],
    },
  ]);
  return render(<RouterProvider router={router} />);
}

describe('MainLayout', () => {
  it('se renderiza sin errores junto con navbar, footer y el contenido hijo', () => {
    renderMainLayout();
    expect(screen.getByText('Contenido de la página')).toBeInTheDocument();
  });

  it('incluye el botón del chat', () => {
    renderMainLayout();
    expect(screen.getByAltText('ChatBot')).toBeInTheDocument();
  });

  it('incluye el footer con el copyright', () => {
    renderMainLayout();
    expect(screen.getByText(/© 2026 UTN/i)).toBeInTheDocument();
  });

  it('incluye el navbar principal con el link de Admisión', () => {
    renderMainLayout();
    expect(screen.getByText('Admisión')).toBeInTheDocument();
  });
});