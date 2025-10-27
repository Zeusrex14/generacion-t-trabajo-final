import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './perfil.css';

function Perfil() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    id: localStorage.getItem('usuarioId'),
    nombre: localStorage.getItem('usuarioNombre'),
    correo: localStorage.getItem('usuarioCorreo')
  });

  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    if (!usuario.id) {
      navigate('/');
      return;
    }

    fetch(`http://localhost:3000/favoritos/${usuario.id}`)
      .then(res => res.json())
      .then(data => setFavoritos(data))
      .catch(console.error);
  }, [usuario.id, navigate]);

  const handleEliminar = (vueloId) => {
    fetch(`http://localhost:3000/favoritos/${usuario.id}/${vueloId}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje);
        setFavoritos(favoritos.filter(p => p.Id !== vueloId));
      })
      .catch(() => alert('Error al eliminar favorito'));
  };

  const handleEnviarEmail = (paquete) => {
    fetch('http://localhost:3000/enviar-gmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ correoDestino: usuario.correo, paquete })
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje);
        if (data.previewUrl) {
          window.open(data.previewUrl, '_blank');
        }
      })
      .catch(() => alert('Error enviando email'));
  };

  const handleCerrarSesion = () => {
    fetch('http://localhost:3000/logout', {
      method: 'POST'
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje);
        localStorage.clear();
        navigate('/');
      })
      .catch(() => alert('Error al cerrar sesión'));
  };

  return (
    <div className="perfil-page">
      <h2>Bienvenido, {usuario.nombre}</h2>
      <h3>Tus paquetes favoritos:</h3>

      {favoritos.length > 0 ? favoritos.map(p => (
        <div key={p.Id} className="favorito-card">
          <p><strong>Destino ida:</strong> {p.destinoida}</p>
          <p><strong>Destino vuelta:</strong> {p.destinovuelta}</p>
          <p><strong>Precio:</strong> ${p.precio}</p>

          <button onClick={() => handleEliminar(p.Id)}>
            ❌ Eliminar
          </button>

          <button onClick={() => handleEnviarEmail(p)}>
            📧 Enviar Email
          </button>
        </div>
      )) : (
        <p className="no-fav">No tenés paquetes guardados.</p>
      )}

      <button
        onClick={handleCerrarSesion}
        className="cerrar-sesion-btn"
      >
        Cerrar sesión
      </button>
    </div>
  );
}

export default Perfil;
