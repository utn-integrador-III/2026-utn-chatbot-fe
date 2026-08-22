import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import AvatarLogin from '../pages/avatar';

describe('AvatarLogin', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the login form', () => {
    render(<AvatarLogin />);

    expect(screen.getByPlaceholderText('Usuario')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Contraseña')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument();
  });

  it('updates usuario and contrasena as the user types', () => {
    render(<AvatarLogin />);

    const usuarioInput = screen.getByPlaceholderText('Usuario') as HTMLInputElement;
    const contrasenaInput = screen.getByPlaceholderText('Contraseña') as HTMLInputElement;

    fireEvent.change(usuarioInput, { target: { value: 'miusuario' } });
    fireEvent.change(contrasenaInput, { target: { value: 'miclave' } });

    expect(usuarioInput.value).toBe('miusuario');
    expect(contrasenaInput.value).toBe('miclave');
  });

  it('calls handleLogin with the current usuario/contrasena on click', () => {
    render(<AvatarLogin />);

    fireEvent.change(screen.getByPlaceholderText('Usuario'), {
      target: { value: 'test-user' }
    });
    fireEvent.change(screen.getByPlaceholderText('Contraseña'), {
      target: { value: 'test-pass' }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Ingresar' }));

    expect(console.log).toHaveBeenCalledWith('Login clicked with:', {
      usuario: 'test-user',
      contrasena: 'test-pass'
    });
  });

  it('calls handleForgotPassword when clicked', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Olvidó Contraseña'));

    expect(console.log).toHaveBeenCalledWith('Olvidó Contraseña clicked');
  });

  it('calls handleActivateAccount when clicked', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Activar Cuenta'));

    expect(console.log).toHaveBeenCalledWith('Activar Cuenta clicked');
  });

  it('calls handleFrequentQuestions when clicked', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Preguntas Frecuentes'));

    expect(console.log).toHaveBeenCalledWith('Preguntas Frecuentes clicked');
  });

  it('calls handlePrivacidad and prevents default navigation', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Privacidad'));

    expect(console.log).toHaveBeenCalledWith('Privacidad clicked');
  });

  it('calls handleUso and prevents default navigation', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Uso'));

    expect(console.log).toHaveBeenCalledWith('Uso clicked');
  });

  it('calls handleSoporte and prevents default navigation', () => {
    render(<AvatarLogin />);

    fireEvent.click(screen.getByText('Soporte'));

    expect(console.log).toHaveBeenCalledWith('Soporte clicked');
  });
});