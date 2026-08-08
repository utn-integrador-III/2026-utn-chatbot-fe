import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Chat from '../components/chat';

describe('Chat', () => {
  beforeEach(() => {
    globalThis.fetch = vi.fn();
   });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('el chat está cerrado por defecto', () => {
    render(<Chat />);
    expect(screen.queryByPlaceholderText('Escribe tu mensaje...')).not.toBeInTheDocument();
  });

  it('abre la ventana de chat al hacer clic en el botón', () => {
    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));
    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeInTheDocument();
  });

  it('muestra el encabezado "Asistente Virtual UTN" al abrir', () => {
    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));
    expect(screen.getByText('Asistente Virtual UTN')).toBeInTheDocument();
  });

  it('muestra las 4 sugerencias iniciales al abrir el chat', () => {
    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));
    expect(screen.getByText('Consultas de becas')).toBeInTheDocument();
    expect(screen.getByText('Consultas de matrículas')).toBeInTheDocument();
    expect(screen.getByText('Horarios de clases')).toBeInTheDocument();
    expect(screen.getByText('Información general')).toBeInTheDocument();
  });

  it('cierra el chat al hacer clic de nuevo en el botón', () => {
    render(<Chat />);
    const chatButton = screen.getByRole('button', { name: /chatbot/i });
    fireEvent.click(chatButton);
    expect(screen.getByPlaceholderText('Escribe tu mensaje...')).toBeInTheDocument();
    fireEvent.click(chatButton);
    expect(screen.queryByPlaceholderText('Escribe tu mensaje...')).not.toBeInTheDocument();
  });

  it('envía un mensaje al hacer clic en una sugerencia', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: { content: 'Aquí tienes info de becas' } }),
    });

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));
    fireEvent.click(screen.getByText('Consultas de becas'));

    expect(screen.getByText('Consultas de becas', { selector: '.message' })).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Aquí tienes info de becas')).toBeInTheDocument();
    });
  });

  it('envía un mensaje escrito y muestra la respuesta del bot', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: { content: 'Respuesta de prueba' } }),
    });

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));

    const input = screen.getByPlaceholderText('Escribe tu mensaje...');
    fireEvent.change(input, { target: { value: 'Hola' } });
    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText('Respuesta de prueba')).toBeInTheDocument();
    });
  });

  it('envía un mensaje al presionar Enter', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: { content: 'Respuesta vía Enter' } }),
    });

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));

    const input = screen.getByPlaceholderText('Escribe tu mensaje...');
    fireEvent.change(input, { target: { value: 'Hola con Enter' } });
    fireEvent.keyDown(input, { key: 'Enter' });

    await waitFor(() => {
      expect(screen.getByText('Respuesta vía Enter')).toBeInTheDocument();
    });
  });

  it('limpia el input después de enviar el mensaje', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: { content: 'ok' } }),
    });

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));

    const input = screen.getByPlaceholderText('Escribe tu mensaje...') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Mensaje de prueba' } });
    fireEvent.click(screen.getByText('Enviar'));

    expect(input.value).toBe('');
  });

  it('no envía nada si el input está vacío', () => {
    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));
    fireEvent.click(screen.getByText('Enviar'));
    expect(globalThis.fetch).not.toHaveBeenCalled();
  });

  it('muestra mensaje de error si la API falla', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('Network error'));

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));

    const input = screen.getByPlaceholderText('Escribe tu mensaje...');
    fireEvent.change(input, { target: { value: 'Hola' } });
    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText('Hubo un error al obtener la respuesta.')).toBeInTheDocument();
    });
  });

  it('muestra mensaje de error si la respuesta HTTP no es ok', async () => {
    (globalThis.fetch as ReturnType<typeof vi.fn>).mockResolvedValueOnce({ ok: false });

    render(<Chat />);
    fireEvent.click(screen.getByRole('button', { name: /chatbot/i }));

    const input = screen.getByPlaceholderText('Escribe tu mensaje...');
    fireEvent.change(input, { target: { value: 'Hola' } });
    fireEvent.click(screen.getByText('Enviar'));

    await waitFor(() => {
      expect(screen.getByText('Hubo un error al obtener la respuesta.')).toBeInTheDocument();
    });
  });
});