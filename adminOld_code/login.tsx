/*import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userOrEmail: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const { userOrEmail, password } = formData; // asumimos que tienes un campo único

    // Validación mínima
    if (!userOrEmail.trim() || !password.trim()) {
      setError("Debes ingresar usuario/email y contraseña");
      setLoading(false);
      return;
    }

    // Construir payload según si es email o username
    const payload: any = { password };
    if (userOrEmail.includes("@")) {
      payload.email = userOrEmail;
    } else {
      payload.username = userOrEmail;
    }

    try {
      const response = await fetch("http://127.0.0.1:7005/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      switch (response.status) {
        case 200:
          // Login exitoso
          localStorage.setItem("token", data.token); // Guardar token JWT
          console.log(data.mensaje);
          navigate("/upload-archive");
          break;
        case 400:
        case 404:
        case 401:
          // Errores del backend
          setError(data.mensaje);
          break;
        default:
          setError("Error desconocido");
      }
    } catch (err) {
      setError("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
}

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Administrador UTN</h1>
        <form onSubmit={handleSubmit} className={loading ? 'loading' : ''}>
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="email">Correo electrónico o usuario</label>
            <input
              type="text"
              id="userOrEmail"
              name="userOrEmail"
              placeholder="usuario@utn.ac.cr"
              value={formData.userOrEmail}
              onChange={handleInputChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <div style={{ position: 'relative' }}>
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="form-input"
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                tabIndex={-1}
              >
                {showPassword ? (
                  <i className="bi bi-eye-slash-fill"></i>
                ) : (
                  <i className="bi bi-eye-fill"></i>
                )}
              </button>
            </div>
          </div>

          
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? (
              <>
                <div className="loading-spinner"></div> Iniciando sesión...
              </>
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>

        <div className="register-link">
          <Link to="/register">¿No tienes cuenta? Registrarse</Link>
        </div>

        <div className="back-link">
          <button
            type="button"
            className="btn-back"
            onClick={() => {
              if (window.opener) {
                window.close();
              } else {
                navigate('/');
              }
            }}
            aria-label="Regresar a la página principal"
          >
            ← Regresar al sitio web
          </button>
        </div>

      </div>
    </div>
  );
}
export default Login; */
