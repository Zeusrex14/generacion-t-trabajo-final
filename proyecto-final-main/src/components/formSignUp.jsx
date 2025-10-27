import './formSignUp.css';
import { useState } from 'react';

function FormSignUp({ onClose }) {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmar, setConfirmar] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (contrasena !== confirmar) {
      setError('Las contraseñas no coinciden');
      return;
    }

    try {
      const res = await fetch('http://localhost:3000/registrar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre,
          correo,
          contrasena
        })
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registro exitoso 🚀');
        onClose(); // Cerrar modal
      } else {
        setError(data.error || 'Error en el registro');
      }
    } catch (err) {
      console.error('Error en el registro:', err);
      setError('No se pudo conectar al servidor');
    }
  };

  return (
    <div className="form-container" onClick={(e) => e.stopPropagation()}>
      <h2 className="form-title">Registrarse</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de usuario"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) => setContrasena(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirmar contraseña"
          value={confirmar}
          onChange={(e) => setConfirmar(e.target.value)}
          required
        />
        {error && <p className="error">{error}</p>}
        <button id="button" type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default FormSignUp;
