import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './CardViajes.css';

function CardViajes() {
  const { pais } = useParams();
  const [viajes, setViajes] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/viajes')
      .then(res => res.json())
      .then(data => {
        const filtrados = data.filter(v =>
          v.destinoida.toLowerCase().includes(pais.toLowerCase())
        );
        setViajes(filtrados);
      })
      .catch(err => console.error('Error al obtener viajes:', err));
  }, [pais]);

  return (
    <div className="viajes-page">
      <h1>Viajes a {pais}</h1>
      <div className="viajes-container">
        {viajes.length === 0 && <p>No hay resultados para este destino.</p>}
        {viajes.map((v, index) => (
          <Link to={`/paquete/${v.Id}`} key={index} className="card-viajes">
            <img src={`/${v.imagen}`} alt={v.destinoida} />
            <h2 className="card-title">
              Paquete a {v.destinoida} {v.aeropuertollegadaida}
            </h2>
            <p className="card-rating" data-rating={v.rating}>
              <strong>Rating:</strong>
            </p>
            <p className="card-detail">
              <strong>Origen:</strong> {v.aeropuertosalidaida}
            </p>
            <p className="card-detail">
              <strong>Clase:</strong> {v.paquetevuelo}
            </p>
            <p className="card-price">
              <strong>Precio:</strong> ${v.precio}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CardViajes;
