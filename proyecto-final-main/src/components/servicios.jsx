// servicios.jsx
import './servicios.css'

export default function Servicios() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Servicios</h1>
        <p>Todo lo que ofrecemos para que tu viaje sea perfecto.</p>
      </section>

      <section className="services-grid">
        <div className="service-card">
          <span>🛫</span>
          <h3>Check-in Rápido</h3>
          <p>Evita las colas con nuestro sistema online.</p>
        </div>
        <div className="service-card">
          <span>🍴</span>
          <h3>Gastronomía</h3>
          <p>Restaurantes y cafés para todos los gustos.</p>
        </div>
        <div className="service-card">
          <span>🧳</span>
          <h3>Lockers</h3>
          <p>Almacenaje seguro para tu equipaje.</p>
        </div>
        <div className="service-card">
          <span>🚗</span>
          <h3>Transporte</h3>
          <p>Shuttle y taxis 24/7 al aeropuerto.</p>
        </div>
      </section>
    </main>
  )
}
