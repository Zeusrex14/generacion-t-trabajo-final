import { useState } from 'react';
import './formLogin.css';

function FormLogin({ onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email, contrasena: password }),
      });

      const data = await res.json();

      if (res.ok) {
        // Guardar datos en localStorage para usar en otras partes del front
        localStorage.setItem('usuarioId', data.id);
        localStorage.setItem('usuarioNombre', data.nombre);
        localStorage.setItem('usuarioCorreo', data.correo); // <-- AGREGADO

        onClose(); // Cerrar modal

        // Opcional: mostrar mensaje o redirigir
        alert(`Bienvenido, ${data.nombre}!`);
        // window.location.href = '/perfil'; // <-- si querés redirigir automático
      } else {
        setError(data.error || 'Error en el login');
      }
    } catch {
      setError('Error de conexión con el servidor');
    }
  };

  return (
    <div className="form-container" onClick={e => e.stopPropagation()}>
      <h2 className="form-title">Iniciar sesión</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <button id="button" type="submit">Entrar</button>
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
      </form>
    </div>
  );
}

export default FormLogin;
