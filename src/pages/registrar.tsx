import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/registrar.css';


interface RegisterFormData {
  username: string;
  email: string;
  password: string;
}

function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormData>({
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!formData.username.trim() || !formData.email.trim() || !formData.password.trim()) {
      setError("Todos los campos son obligatorios.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:7005/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.status === 201) {
        console.log(data.mensaje); // "Usuario registrado correctamente"
        setSuccess(data.mensaje);
        setTimeout(() => {
          navigate("/login");
        }, 10000);
      } else if (response.status === 400) {
        setError(data.mensaje); // "El correo ya está registrado" o "El nombre de usuario ya está registrado"
      } else if (response.status === 500) {
        setError("Error en el servidor. Intenta más tarde.");
      } else {
        setError("Error desconocido.");
      }
    } catch {
      setError("Error al registrar. Intenta nuevamente.");
    } finally {
      setLoading(false);
    }
};


  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        <p>Ingresa tus datos para registrarte</p>
        {error && <div className="error">{error}</div>}
        {success && <div className="success">{success}</div>}

        <label>
          Usuario
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="Nombre de usuario"
            required
          />
        </label>

        <label>
          Correo electrónico
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="usuario@utn.ac.cr"
            required
          />
        </label>

        <label>
          Contraseña
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="••••••••"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            >
              <i className={`bi ${showPassword ? 'bi-eye-slash-fill' : 'bi-eye-fill'}`}></i>
            </button>
          </div>
        </label>

        <button type="submit" disabled={loading}>
          {loading ? 'Registrando...' : 'Registrarse'}
        </button>

        <p className="login-link">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </form>
    </div>
  );
}
export default Register;