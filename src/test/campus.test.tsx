import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Campus from '../pages/campus';

describe('Campus', () => {
  beforeEach(() => {
    vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders the login form', () => {
    render(<Campus />);

    expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Access as a guest' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Cookies notice' })
    ).toBeInTheDocument();
  });

  it('updates username and password as the user types', () => {
    render(<Campus />);

    const usernameInput = screen.getByPlaceholderText('Username') as HTMLInputElement;
    const passwordInput = screen.getByPlaceholderText('Password') as HTMLInputElement;

    fireEvent.change(usernameInput, { target: { value: 'miusuario' } });
    fireEvent.change(passwordInput, { target: { value: 'miclave' } });

    expect(usernameInput.value).toBe('miusuario');
    expect(passwordInput.value).toBe('miclave');
  });

  it('calls handleLogin with the current username/password on click', () => {
    render(<Campus />);

    fireEvent.change(screen.getByPlaceholderText('Username'), {
      target: { value: 'test-user' }
    });
    fireEvent.change(screen.getByPlaceholderText('Password'), {
      target: { value: 'test-pass' }
    });

    fireEvent.click(screen.getByRole('button', { name: 'Log in' }));

    expect(console.log).toHaveBeenCalledWith('Login clicked with:', {
      username: 'test-user',
      password: 'test-pass'
    });
  });

  it('calls handleGuestAccess when clicking "Access as a guest"', () => {
    render(<Campus />);

    fireEvent.click(screen.getByRole('button', { name: 'Access as a guest' }));

    expect(console.log).toHaveBeenCalledWith('Guest access clicked');
  });

  it('calls handleForgotPassword and prevents default navigation on "Lost password?"', () => {
    render(<Campus />);

    fireEvent.click(screen.getByText('Lost password?'));

    expect(console.log).toHaveBeenCalledWith('Forgot password clicked');
  });

  it('calls handleCookiesNotice when clicking "Cookies notice"', () => {
    render(<Campus />);

    fireEvent.click(screen.getByRole('button', { name: 'Cookies notice' }));

    expect(console.log).toHaveBeenCalledWith('Cookies notice clicked');
  });

  it('defaults to "English (en)" and updates when a new language is selected', () => {
    render(<Campus />);

    const select = screen.getByRole('combobox') as HTMLSelectElement;
    expect(select.value).toBe('English (en)');

    fireEvent.change(select, { target: { value: 'Español (es)' } });

    expect(select.value).toBe('Español (es)');
  });

  it('renders the guest access section title', () => {
    render(<Campus />);

    expect(
      screen.getByText('Some courses may allow guest access')
    ).toBeInTheDocument();
  });
});