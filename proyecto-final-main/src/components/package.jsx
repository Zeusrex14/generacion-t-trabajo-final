import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Package.css'; // Si tenés estilos, asegurate que exista este archivo

function Package() {
  const { id } = useParams();
  const [paquete, setPaquete] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/paquete/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log('📦 Datos recibidos del backend:', data);
        setPaquete(data);
      })
      .catch(err => console.error('❌ Error al obtener el paquete:', err));
  }, [id]);

  // 🔥 NUEVO: función para guardar favorito
  const guardarFavorito = () => {
    const usuarioId = localStorage.getItem('usuarioId'); 
    // Nos aseguramos de que el usuario esté logueado

    if (!usuarioId) {
      alert('Debés iniciar sesión para guardar favoritos');
      return;
    }

    fetch('http://localhost:3000/favoritos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        usuario_id: usuarioId,
        vuelo_id: id
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert(data.mensaje || 'Guardado como favorito');
      })
      .catch(err => {
        console.error('❌ Error al guardar favorito:', err);
        alert('Error al guardar favorito');
      });
  };

  if (!paquete) return <p>Cargando paquete...</p>;

  return (
    <div className="package">
      <h2 className="title">Tu paquete:</h2>
      <div className="wrap">

        <div id="vuelo" className="contenedorCard">
          <h2>Vuelo de ida</h2>
          <p><strong>Origen:</strong> {paquete.aeropuertosalidaida}</p>
          <p><strong>Destino:</strong> {paquete.aeropuertollegadaida}</p>
          <p><strong>Fecha salida:</strong> {paquete.fechasalidaida}</p>
          <p><strong>Fecha llegada:</strong> {paquete.fechallegadaida}</p>
          <p><strong>Hora salida:</strong> {paquete.horasalidaida}</p>
          <p><strong>Hora llegada:</strong> {paquete.horallegadaida}</p>
        </div>

        <div id="detalles" className="contenedorCard">
          <h2>Vuelo de vuelta</h2>
          <p><strong>Origen:</strong> {paquete.aeropuertosalidavuelta}</p>
          <p><strong>Destino:</strong> {paquete.aeropuertollegadavuelta}</p>
          <p><strong>Fecha salida:</strong> {paquete.fechasalidavuelta}</p>
          <p><strong>Fecha llegada:</strong> {paquete.fechallegadavuelta}</p>
          <p><strong>Hora salida:</strong> {paquete.horasalidavuelta}</p>
          <p><strong>Hora llegada:</strong> {paquete.horallegadavuelta}</p>
        </div>

        <div id="precio" className="contenedorCard">
          <h2>Detalles del paquete</h2>
          <p><strong>Destino Ida:</strong> {paquete.destinoida}</p>
          <p><strong>Destino Vuelta:</strong> {paquete.destinovuelta}</p>
          <p><strong>Tipo de vuelo:</strong> {paquete.paquetevuelo}</p>
          <p><strong>Rating:</strong> {paquete.rating}</p>
          <h2>Precio</h2>
          <p id="valor"><strong>${paquete.precio}</strong></p>
        </div>
      </div>

      {/* 🔥 NUEVO: botón para guardar favorito */}
      <button
        onClick={guardarFavorito}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          cursor: 'pointer'
        }}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default Package;
